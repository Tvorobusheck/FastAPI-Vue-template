# Important!
# Add routers to core/router.py
from typing import Annotated, Optional
import uuid
from fastapi import Depends, HTTPException

from fastapi_pagination import LimitOffsetPage, Page
from fastapi_pagination.ext.sqlalchemy import paginate

from fastcrud import FastCRUD, FilterConfig, crud_router, EndpointCreator
from sqlalchemy.ext.asyncio import AsyncSession
from features.users.ownership.router import OwnerFilteredEndpointCreator
from features.users.ownership.schemas import OwnedBaseSchemaMixin
from core.db import get_async_session
from . import models, schemas, crud
from features.users.common.models import User, active_user_id, current_active_user
from features.users.ownership.dependencies import check_owner_dep, multi_owner, set_owner_dep


ROUTER_PATH="/items"
SEARCH_PATH="/search" + ROUTER_PATH


router = crud_router(
    session=get_async_session,
    model=models.Item,
    select_schema=Annotated[schemas.ItemSchema, Depends(check_owner_dep(models.Item))],
    create_schema=Annotated[schemas.ItemCreateSchema, Depends(set_owner_dep(schemas.ItemCreateSchema))],
    update_schema=Annotated[schemas.ItemUpdateSchema, Depends(set_owner_dep(schemas.ItemCreateSchema, owner_required=False))],
    path=ROUTER_PATH,
    create_deps=[current_active_user],
    read_deps=[check_owner_dep(models.Item)],
    read_multi_deps=[multi_owner],
    update_deps=[check_owner_dep(models.Item)],
    delete_deps=[check_owner_dep(models.Item)],
    filter_config=FilterConfig(owner_id=None),
    endpoint_creator=OwnerFilteredEndpointCreator,
    tags=["Items"],
)

@router.get(SEARCH_PATH, tags=['Items', 'Search'], response_model=Page[schemas.ItemSchema])
async def search(name: Optional[str] = '', 
                 db: AsyncSession = Depends(get_async_session),
                 current_user: User = Depends(current_active_user)): 
    
   return await paginate(conn=db, query=crud.search_query(name, current_user))