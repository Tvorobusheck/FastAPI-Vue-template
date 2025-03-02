# Important!
# Add routers to core/router.py
from typing import Annotated
import uuid
from fastapi import Depends, HTTPException, Path
from fastcrud import FilterConfig, crud_router, EndpointCreator
from sqlalchemy.ext.asyncio import AsyncSession
from core.db import get_async_session
from . import models, schemas
from features.users.common.models import User, active_user_id, current_active_user

ROUTER_PATH="/items"


# Dependency to get the owner_id
async def item_owner(item: schemas.ItemCreateSchema, current_user: User = Depends(current_active_user)) -> schemas.ItemSchema:
    item.owner_id = current_user.id
    return item


# Dependency to get the owner_id
async def item_owner_optionally(item: schemas.ItemBaseSchema, current_user: User = Depends(current_active_user)) -> schemas.ItemSchema:
    if item.owner_id is None:
        item.owner_id = current_user.id
    return item


async def item_check_owner(session: Annotated[AsyncSession, Depends(get_async_session)], id: int = Path(),
                            current_user: User = Depends(current_active_user)):
    item = await session.get(models.Item, id)
    if item is None:
        raise HTTPException(status_code=404)
    if item.owner_id != current_user.id:
        raise HTTPException(status_code=403)
    

router = crud_router(
    session=get_async_session,
    model=models.Item,
    select_schema=schemas.ItemSchema,
    create_schema=Annotated[schemas.ItemCreateSchema, Depends(item_owner)],
    update_schema=Annotated[schemas.ItemCreateSchema, Depends(item_owner_optionally)],
    # included_methods=["read", "read_multi"],
    path=ROUTER_PATH,
    create_deps=[current_active_user],
    read_deps=[item_check_owner],
    read_multi_deps=[current_active_user],
    update_deps=[item_check_owner],
    delete_deps=[item_check_owner],
    tags=["Items"],
)

async def my_dependency_function(item_id: int):
    return {"item_id": item_id}

@router.post(path='/test-dep')
async def test_dep(item: Annotated[schemas.ItemCreateSchema, Depends(item_owner)]):
    return item  # TODO: return ItemSchema instead of ItemSchemaCreate