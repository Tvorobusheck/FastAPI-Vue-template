from typing import Type
import uuid
from httpx import AsyncClient
from pydantic import BaseModel
from core.utils import get_jwt_header

from . import schemas


async def read_multi_owned(client: AsyncClient, jwt: str, path: str) -> list:
    response = await client.get(path)
    assert response.status_code == 401
    response = await client.get(path, headers=get_jwt_header(jwt))
    assert response.status_code == 200
    return response.json()['data']


async def create_owned_item(client: AsyncClient, jwt: str, path: str, 
                            creating: schemas.OwnedBaseSchemaMixin, 
                            read_schema: Type[schemas.OwnedBaseSchemaMixin]) -> schemas.OwnedBaseSchemaMixin:
    data = await read_multi_owned(client, jwt, path)
    old_quantity = len(data)
    assert old_quantity >= 0

    create_response = await client.post(path, 
                                        json=creating.model_dump(),
                                        headers=get_jwt_header(jwt))
    assert create_response.status_code == 200
    created_item = read_schema(**create_response.json())

    new_data = await read_multi_owned(client, jwt, path)
    new_quantity = len(new_data)
    assert new_quantity == old_quantity + 1

    return created_item