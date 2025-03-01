from httpx import AsyncClient
import pytest

from features.users.fixtures import create_user
from . import schemas, router
from core.fixtures import *
from features.users.fixtures import jwt, user_id
from core.utils import get_jwt_header, random_str, path_with_id

async def test_read_items(client: AsyncClient, jwt: str):
    response = await client.get(router.ROUTER_PATH, headers=get_jwt_header(jwt))
    assert response.status_code == 200
    response = await client.get(router.ROUTER_PATH)
    assert response.status_code == 401


async def test_create_item_test_dep(client: AsyncClient, jwt: str, user_id: uuid.UUID):
    new_item = schemas.ItemCreateSchema(name=random_str(), 
                                        description=random_str())
    create_response = await client.post('/test-dep', 
                                        json={'name': new_item.name, 'description': new_item.description}, 
                                        headers=get_jwt_header(jwt))
    assert create_response.status_code == 200
    created_item_dict = create_response.json()
    created_item_dict['owner_id'] = uuid.UUID(created_item_dict['owner_id'])
    created_item = schemas.ItemCreateSchema(**created_item_dict)
    assert new_item.name == created_item.name
    assert created_item.owner_id == user_id




async def test_create_item(client: AsyncClient, jwt: str, user_id: uuid.UUID):
    read_response = await client.get(router.ROUTER_PATH, headers=get_jwt_header(jwt))
    data = read_response.json()['data']
    old_quantity = len(data)
    assert old_quantity >= 0
    new_item = schemas.ItemCreateSchema(name=random_str(), 
                                        description=random_str())
    create_response = await client.post(router.ROUTER_PATH, 
                                        json={'name': new_item.name, 'description': new_item.description}, 
                                        headers=get_jwt_header(jwt))
    assert create_response.status_code == 200
    created_item = schemas.ItemSchema(**create_response.json())
    assert new_item.name == created_item.name
    assert created_item.owner_id == user_id
    read_response = await client.get(router.ROUTER_PATH, headers=get_jwt_header(jwt))
    new_quantity = len(read_response.json()['data'])
    assert new_quantity == old_quantity + 1

    
async def test_crud_item(client: AsyncClient, jwt: str):
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

    remove_response = await client.delete(id_path, 
                                          headers=get_jwt_header(jwt))
    assert remove_response.status_code == 200

    read_response = await client.get(id_path, 
                                     headers=get_jwt_header(jwt))
    assert read_response != 200
