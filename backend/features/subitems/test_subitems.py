from httpx import AsyncClient
import pytest

from features.users.common.fixtures import create_user
from . import schemas, router
from features.items import schemas as item_schemas
from features.items import router as item_router
from core.fixtures import *
from features.users.common.fixtures import init_user, jwt_login, get_user_id, jwt, client, user_id
from core.utils import get_jwt_header, random_str, path_with_id
from features.items.testing_utils import create_item
from features.users.ownership.testing_utils import create_owned_item, read_multi_owned


async def test_read_subitems(client: AsyncClient, jwt: str):
    await read_multi_owned(client, jwt, router.ROUTER_PATH)


async def test_create_subitem(client: AsyncClient, jwt: str, user_id: uuid.UUID):
    created_item = await create_item(client, jwt, user_id)
    assert created_item.owner_id == user_id

    new_subitem = schemas.SubitemCreateSchema(name=random_str(), 
                                              description=random_str(),
                                              item_id=created_item.id)

    created_subitem = schemas.SubitemSchema(**(await create_owned_item(client, jwt, router.ROUTER_PATH, new_subitem)))
    assert created_subitem.item_id == created_item.id
    assert created_subitem.owner_id == user_id