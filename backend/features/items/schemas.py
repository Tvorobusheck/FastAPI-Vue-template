from typing import Annotated, Optional
import uuid
from fastapi import Depends
from pydantic import BaseModel

from features.users.ownership.schemas import OwnedBaseSchemaMixin


class ItemBaseSchema(OwnedBaseSchemaMixin, BaseModel):
    name: str
    description: str

class ItemSchema(ItemBaseSchema):
    id: int
    
class ItemCreateSchema(ItemBaseSchema):
    pass

class ItemUpdateSchema(ItemBaseSchema):
    pass
