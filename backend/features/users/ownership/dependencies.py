from typing import Annotated, Type
from fastapi import Depends, HTTPException, Path
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel

from core.db import get_async_session
from features.users.common.models import User, current_active_user
from . import models, schemas
from core.db import Base


def set_owner_dep(schema: Type[schemas.OwnedBaseSchemaMixin],
                    owner_required: bool = True):
    def set_owner(item: schema, current_user: User = Depends(current_active_user)): # type: ignore
        if owner_required or item.owner_id is None:
            item.owner_id = current_user.id
        return item
    return set_owner


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