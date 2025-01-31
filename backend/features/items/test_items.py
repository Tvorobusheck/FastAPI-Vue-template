from httpx import AsyncClient
import pytest

from features.users.fixtures import create_user
from . import schemas, router
from core.fixtures import *
from core.utils import random_str, path_with_id

async def test_read_items(client: AsyncClient):
    response = await client.get(router.ROUTER_PATH)
    assert response.status_code == 200


async def test_create_item(client: AsyncClient):
    read_response = await client.get(router.ROUTER_PATH)
    data = read_response.json()['data']
    old_quantity = len(data)
    assert old_quantity >= 0
    new_item = schemas.ItemCreateSchema(name=random_str(), 
                                        description=random_str())
    create_response = await client.post(router.ROUTER_PATH, 
                                        json=new_item.model_dump())
    assert create_response.status_code == 200

    read_response = await client.get(router.ROUTER_PATH)
    new_quantity = len(read_response.json()['data'])
    assert new_quantity == old_quantity + 1

    
async def test_crud_item(client: AsyncClient):
    new_item = schemas.ItemCreateSchema(name=random_str(), description=random_str())
    create_response = await client.post(router.ROUTER_PATH, json=new_item.model_dump())
    created_item_dict = create_response.json()
    created_item = schemas.ItemSchema(**created_item_dict)
    assert new_item.name == created_item.name

    updating_item = schemas.ItemUpdateSchema(**new_item.model_dump())
    updating_item.name = random_str()
    id_path = path_with_id(router.ROUTER_PATH, created_item.id)
    update_response = await client.patch(id_path, 
                                         json=updating_item.model_dump())
    assert update_response.status_code == 200

    read_response = await client.get(id_path)
    updated_item = schemas.ItemSchema(**read_response.json())
    assert updated_item.name == updating_item.name

    remove_response = await client.delete(id_path)
    assert remove_response.status_code == 200

    read_response = await client.get(id_path)
    assert read_response != 200

    