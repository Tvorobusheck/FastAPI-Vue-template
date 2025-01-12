import pytest
from . import schemas
from core import tests

pytestmark = pytest.mark.asyncio

async def test_read_items():
    async with tests.create_async_client() as ac:
        response = await ac.get("/items")
    assert response.status_code == 200


async def test_create_item():
    async with tests.create_async_client() as ac:
        read_response = await ac.get("/items")
    old_quantity = int(read_response.json()['total_count'])
    assert old_quantity >= 0

    async with tests.create_async_client() as ac:
        create_response = await ac.post("/items", json=schemas.ItemCreateSchema(name="test", description="test").model_dump())
    assert create_response.status_code == 200

    async with tests.create_async_client() as ac:
        read_response = await ac.get("/items")
    new_quantity = int(read_response.json()['total_count'])
    assert new_quantity == old_quantity + 1