# Important!
# Add routers to core/router.py
from fastcrud import crud_router
from core.db import get_async_session
from . import models, schemas


router = crud_router(
    session=get_async_session,
    model=models.Item,
    create_schema=schemas.ItemCreateSchema,
    update_schema=schemas.ItemUpdateSchema,
    path="/items",
    tags=["Items"],
)
