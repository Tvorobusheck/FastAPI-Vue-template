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
from features.users.ownership.dependencies import check_owner_dep, get_owner_dep


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

    
    

router = crud_router(
    session=get_async_session,
    model=models.Item,
    select_schema=schemas.ItemSchema,
    create_schema=Annotated[schemas.ItemCreateSchema, Depends(item_owner)],
    update_schema=Annotated[schemas.ItemCreateSchema, Depends(item_owner_optionally)],
    # included_methods=["read", "read_multi"],
    path=ROUTER_PATH,
    create_deps=[current_active_user],
    read_deps=[check_owner_dep(models.Item)],
    read_multi_deps=[current_active_user],
    update_deps=[check_owner_dep(models.Item)],
    delete_deps=[check_owner_dep(models.Item)],
    tags=["Items"],
)
