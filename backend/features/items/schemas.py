from typing import Annotated, Optional
import uuid
from fastapi import Depends
from pydantic import BaseModel


class ItemBaseSchema(BaseModel):
    owner_id: Optional[uuid.UUID] = None
    name: str
    description: str

class ItemSchema(ItemBaseSchema):
    id: int
    
class ItemCreateSchema(ItemBaseSchema):
    pass

class ItemUpdateSchema(ItemBaseSchema):
    pass
