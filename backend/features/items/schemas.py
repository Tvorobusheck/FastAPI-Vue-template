import uuid
from pydantic import BaseModel

class ItemBaseSchema(BaseModel):
    name: str
    description: str

class ItemSchema(ItemBaseSchema):
    id: int
    owner_id: uuid.UUID
    
class ItemCreateSchema(ItemBaseSchema):
    pass

class ItemUpdateSchema(ItemBaseSchema):
    pass
