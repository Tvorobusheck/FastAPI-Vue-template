from httpx import AsyncClient
import pytest
from suffix_trees import STree

from features.users.common.fixtures import create_user
from . import schemas, router
from core.fixtures import *
from features.users.common.fixtures import init_user, jwt_login, get_user_id, jwt, client, user_id
from core.utils import get_jwt_header, is_sorted, is_there_item, random_str, path_with_id
from features.users.ownership.testing_utils import read_multi_owned
from .testing_utils import create_item

async def test_read_items(client: AsyncClient, jwt: str):
    await read_multi_owned(client, jwt, router.ROUTER_PATH)


async def test_create_item(client: AsyncClient, jwt: str, user_id: uuid.UUID):
    created_item = await create_item(client, jwt, user_id)
    assert created_item.owner_id == user_id
    assert created_item.name is not None
    assert created_item.description is not None

    
async def test_crud_item(client: AsyncClient, jwt: str, user_id: uuid.UUID):
    new_item = schemas.ItemCreateSchema(name=random_str(), description=random_str())
    create_response = await client.post(router.ROUTER_PATH, json=new_item.model_dump(), 
                                        headers=get_jwt_header(jwt))
    created_item_dict = create_response.json()
    created_item = schemas.ItemSchema(**created_item_dict)
    assert new_item.name == created_item.name

    updating_item = schemas.ItemUpdateSchema(**new_item.model_dump())
    updating_item.name = random_str()
    id_path = path_with_id(router.ROUTER_PATH, created_item.id)
    update_response = await client.patch(id_path, 
                                         json=updating_item.model_dump(), 
                                         headers=get_jwt_header(jwt))
    assert update_response.status_code == 200

    read_response = await client.get(id_path, 
                                     headers=get_jwt_header(jwt))
    updated_item = schemas.ItemSchema(**read_response.json())
    assert updated_item.name == updating_item.name
    assert updated_item.owner_id == user_id

    remove_response = await client.delete(id_path, 
                                          headers=get_jwt_header(jwt))
    assert remove_response.status_code == 200

    remove_response_2 = await client.get(id_path, 
                                     headers=get_jwt_header(jwt))
    assert remove_response_2.status_code == 404


async def test_access_different_users(client: AsyncClient):
    user_1 = await init_user(client)
    jwt_1 = await jwt_login(client, user_1)
    user_2 = await init_user(client)
    jwt_2 = await jwt_login(client, user_2)
    assert user_1.email != user_2.email
    assert jwt_1 != jwt_2

    
    create_response = await client.post(router.ROUTER_PATH, 
                                        json=schemas.ItemCreateSchema(name=random_str(), 
                                                                      description=random_str()).model_dump(), 
                                        headers=get_jwt_header(jwt_2))
    created_item_2 = schemas.ItemSchema(**create_response.json())
    
    id_path = path_with_id(router.ROUTER_PATH, created_item_2.id)
    remove_response = await client.delete(id_path, 
                                          headers=get_jwt_header(jwt_1))
    assert remove_response.status_code == 403
    updating_item = schemas.ItemUpdateSchema(**created_item_2.model_dump())
    updating_item.name = random_str()
    update_response = await client.patch(id_path, 
                                         data=updating_item.model_dump_json(), 
                                         headers=get_jwt_header(jwt_1))
    assert update_response.status_code == 403

    read_response = await client.get(router.ROUTER_PATH, headers=get_jwt_header(jwt_1))
    data = read_response.json()['data']
    old_quantity = len(data)

    updating_item_2 = schemas.ItemUpdateSchema(**created_item_2.model_dump())
    updating_item_2.name = random_str()
    user_id_1 = await get_user_id(client, jwt_1)
    updating_item_2.owner_id = user_id_1
    update_response = await client.patch(id_path, 
                                         data=updating_item_2.model_dump_json(), 
                                         headers=get_jwt_header(jwt_2))
    assert update_response.status_code == 200

    read_response = await client.get(router.ROUTER_PATH, headers=get_jwt_header(jwt_1))
    data = read_response.json()['data']
    new_quantity = len(data)
    assert old_quantity + 1 == new_quantity


    read_response = await client.get(router.ROUTER_PATH, headers=get_jwt_header(jwt_2))
    data = read_response.json()['data']
    other_quantity = len(data)
    assert other_quantity == 0
    

async def test_name_search_items(client: AsyncClient, jwt: str, user_id: uuid.UUID):
    created_items = [await create_item(client, jwt, user_id) for _ in range(4)]
    st = STree.STree([item.name for item in created_items])
    common_substring = st.lcs()

    response = await client.get(router.SEARCH_PATH, params={"name": common_substring}, headers=get_jwt_header(jwt))
    assert response.status_code == 200
    items = list(response.json()['items'])
    assert len(items) >= len(created_items)
    assert is_sorted(items, key=lambda x: x['name'])
    
    response = await client.get(router.SEARCH_PATH, params={"name": common_substring + random_str() + random_str()}, headers=get_jwt_header(jwt))
    assert response.status_code == 200
    items = list(response.json()['items'])
    assert len(items) <= len(created_items)

