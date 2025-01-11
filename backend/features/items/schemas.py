from pydantic import BaseModel

class ItemBaseSchema(BaseModel):
    name: str
    description: str

class ItemSchema(ItemBaseSchema):
    id: int
    
class ItemCreateSchema(ItemBaseSchema):
    pass

class ItemUpdateSchema(ItemBaseSchema):
    pass
