from typing import Annotated, Optional
import uuid
from fastapi import Depends
from pydantic import BaseModel

from features.users.ownership.schemas import OwnedBaseSchemaMixin


class SubitemBaseSchema(OwnedBaseSchemaMixin, BaseModel):
    name: str
    item_id: int
    
class SubitemCreateSchema(SubitemBaseSchema):
    pass

class SubitemUpdateSchema(SubitemBaseSchema):
    pass

class SubitemSchema(SubitemBaseSchema):
    id: int
    
