from httpx import AsyncClient
import pytest
from . import schemas
from core.fixtures import *

async def test_read_items(client: AsyncClient):
    response = await client.get("/items")
    assert response.status_code == 200


async def test_create_item(client: AsyncClient):
    read_response = await client.get("/items")
    old_quantity = int(read_response.json()['total_count'])
    assert old_quantity >= 0
    create_response = await client.post("/items", json=schemas.ItemCreateSchema(name="test", description="test").model_dump())
    assert create_response.status_code == 200

    read_response = await client.get("/items")
    new_quantity = int(read_response.json()['total_count'])
    assert new_quantity == old_quantity + 1