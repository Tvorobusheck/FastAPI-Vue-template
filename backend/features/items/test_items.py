from httpx import AsyncClient
import pytest
from . import schemas, router
from core.fixtures import *
from core.utils import random_str


async def test_read_items(client: AsyncClient):
    response = await client.get(router.ROUTER_PATH)
    assert response.status_code == 200


async def test_create_item(client: AsyncClient):
    read_response = await client.get(router.ROUTER_PATH)
    old_quantity = int(read_response.json()['total_count'])
    assert old_quantity >= 0
    new_item = schemas.ItemCreateSchema(name=random_str(), description=random_str())
    create_response = await client.post(router.ROUTER_PATH, json=new_item.model_dump())
    assert create_response.status_code == 200

    read_response = await client.get(router.ROUTER_PATH)
    new_quantity = int(read_response.json()['total_count'])
    assert new_quantity == old_quantity + 1

    
async def test_crud_item(client: AsyncClient):
    new_item = schemas.ItemCreateSchema(name=random_str(), description=random_str())
    create_response = await client.post(router.ROUTER_PATH, json=new_item.model_dump())
    assert create_response.status_code == 200
    created_item_dict = create_response.json()
    created_item = schemas.ItemSchema(**created_item_dict)
    assert new_item.name == created_item.name

    