import uuid
from httpx import AsyncClient
import pytest

from features.users.common.fixtures import create_user
from . import schemas, router
from core.utils import get_jwt_header, random_str, path_with_id
from features.users.ownership.testing_utils import create_owned_item


async def create_item(client: AsyncClient, jwt: str, user_id: uuid.UUID) -> schemas.ItemSchema:
    new_item = schemas.ItemCreateSchema(name=random_str(), 
                                        description=random_str())
    created_item = await create_owned_item(client, jwt, router.ROUTER_PATH, new_item, schemas.ItemSchema)
    assert new_item.name == created_item.name
    assert new_item.description == created_item.description
    assert created_item.owner_id == user_id
    return created_item