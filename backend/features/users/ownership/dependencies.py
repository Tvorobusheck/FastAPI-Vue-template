from typing import Annotated
from fastapi import Depends, HTTPException, Path
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel

from core.db import get_async_session
from features.users.common.models import User, current_active_user
from . import models, schemas
from core.db import Base


# Dependency to get the owner_id
async def get_owner(item: schemas.OwnedBaseSchemaMixin, 
                    current_user: User = Depends(current_active_user)) -> schemas.OwnedBaseSchemaMixin:
    item.owner_id = current_user.id
    return item


# Dependency to get the owner_id
async def get_owner_optionally(item: schemas.OwnedBaseSchemaMixin, 
                               current_user: User = Depends(current_active_user)) -> schemas.OwnedBaseSchemaMixin:
    if item.owner_id is None:
        item.owner_id = current_user.id
    return item


def get_owner_dep(required: bool = True):
    if required:
        return lambda: get_owner
    else:
        return lambda: get_owner_optionally
    

async def check_owner(
        model: Base,
        session: AsyncSession = Depends(get_async_session), 
        id: int = Path(),
        current_user: User = Depends(current_active_user)):
    item = await session.get(model, id)
    if item is None:
        raise HTTPException(status_code=404)
    if item.owner_id != current_user.id:
        raise HTTPException(status_code=403)


def check_owner_dep(model: Base):
    return lambda: check_owner(model)