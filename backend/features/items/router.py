# Important!
# Add routers to core/router.py
from typing import Annotated
from fastapi import Depends
from fastcrud import FilterConfig, crud_router, EndpointCreator
from sqlalchemy.ext.asyncio import AsyncSession
from features.users.ownership.schemas import OwnedBaseSchemaMixin
from core.db import get_async_session
from . import models, schemas
from features.users.common.models import User, active_user_id, current_active_user
from features.users.ownership.dependencies import check_owner_dep, set_owner_dep


ROUTER_PATH="/items"


router = crud_router(
    session=get_async_session,
    model=models.Item,
    select_schema=schemas.ItemSchema,
    create_schema=Annotated[schemas.ItemCreateSchema, Depends(set_owner_dep(schemas.ItemCreateSchema))],
    update_schema=Annotated[schemas.ItemCreateSchema, Depends(set_owner_dep(schemas.ItemCreateSchema, owner_required=False))],
    # included_methods=["read", "read_multi"],
    path=ROUTER_PATH,
    create_deps=[current_active_user],
    read_deps=[check_owner_dep(models.Item)],
    read_multi_deps=[current_active_user],
    update_deps=[check_owner_dep(models.Item)],
    delete_deps=[check_owner_dep(models.Item)],
    tags=["Items"],
)
