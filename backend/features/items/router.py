# Important!
# Add routers to core/router.py
from fastcrud import crud_router, EndpointCreator
from core.db import get_async_session
from . import models, schemas
from features.users.models import current_active_user

ROUTER_PATH="/items"

router = crud_router(
    session=get_async_session,
    model=models.Item,
    select_schema=schemas.ItemSchema,
    create_schema=schemas.ItemCreateSchema,
    update_schema=schemas.ItemUpdateSchema,
    path=ROUTER_PATH,
    create_deps=[current_active_user],
    read_deps=[current_active_user],
    read_multi_deps=[current_active_user],
    update_deps=[current_active_user],
    delete_deps=[current_active_user],
    tags=["Items"],
)
