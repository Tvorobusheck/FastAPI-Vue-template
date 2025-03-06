# Important!
# Add routers to core/router.py
from typing import Annotated
import uuid
from fastapi import Depends
from fastcrud import FilterConfig, crud_router, EndpointCreator
from sqlalchemy.ext.asyncio import AsyncSession
from features.users.ownership.router import OwnerFilteredEndpointCreator
from features.users.ownership.schemas import OwnedBaseSchemaMixin
from core.db import get_async_session
from . import models, schemas
from features.users.common.models import User, active_user_id, current_active_user
from features.users.ownership.dependencies import check_owner_dep, multi_owner, set_owner_dep


ROUTER_PATH="/items"
# TODO: use this: https://github.com/igorbenav/fastcrud/issues/41
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
    filter_config=FilterConfig(owner_id=None, name=None),
    endpoint_creator=OwnerFilteredEndpointCreator,
    tags=["Items"],
)
