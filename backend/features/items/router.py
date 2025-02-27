# Important!
# Add routers to core/router.py
from typing import Annotated
import uuid
from fastapi import Depends
from fastcrud import crud_router, EndpointCreator
from core.db import get_async_session
from . import models, schemas
from features.users.models import User, active_user_id, current_active_user

ROUTER_PATH="/items"

router = crud_router(
    session=get_async_session,
    model=models.Item,
    select_schema=schemas.ItemSchema,
    create_schema=schemas.ItemCreateSchema,
    update_schema=schemas.ItemUpdateSchema,
    # included_methods=["read", "read_multi"],
    path=ROUTER_PATH,
    create_deps=[current_active_user],
    read_deps=[current_active_user],
    read_multi_deps=[current_active_user],
    update_deps=[current_active_user],
    delete_deps=[current_active_user],
    tags=["Items"],
)

async def my_dependency_function(item_id: int):
    return {"item_id": item_id}


# Dependency to get the owner_id
async def item_owner(item: schemas.ItemCreateSchema, current_user: User = Depends(current_active_user)) -> schemas.ItemSchema:
    item.owner_id = current_user.id
    return item


@router.post(path='/test-dep')
async def test_dep(item: schemas.ItemCreateSchema = Depends(item_owner)):
    return item  # TODO: return ItemSchema instead of ItemSchemaCreate