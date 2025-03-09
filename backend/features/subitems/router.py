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


ROUTER_PATH="/subitems"
router = crud_router(
    session=get_async_session,
    model=models.Subitem,
    select_schema=Annotated[schemas.SubitemSchema, Depends(check_owner_dep(models.Subitem))],
    create_schema=Annotated[schemas.SubitemCreateSchema, Depends(set_owner_dep(schemas.SubitemCreateSchema))],
    update_schema=Annotated[schemas.SubitemUpdateSchema, Depends(set_owner_dep(schemas.SubitemCreateSchema, owner_required=False))],
    path=ROUTER_PATH,
    create_deps=[current_active_user],
    read_deps=[check_owner_dep(models.Subitem)],
    read_multi_deps=[multi_owner],
    update_deps=[check_owner_dep(models.Subitem)],
    delete_deps=[check_owner_dep(models.Subitem)],
    filter_config=FilterConfig(owner_id=None, name=None),
    endpoint_creator=OwnerFilteredEndpointCreator,
    tags=["Subitems"],
)
