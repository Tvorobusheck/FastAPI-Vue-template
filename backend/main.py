from fastapi import Depends
from sqlalchemy import Integer, String, select
from sqlalchemy.ext.asyncio import AsyncSession
import strawberry
from strawberry.fastapi import GraphQLRouter
from typing import Annotated, List

from core.db import get_async_session
from core.models import Item
from core.schemas import ItemCreate
from core.router import app

@strawberry.type
class ItemType:
    name: str
    description: str

all_items = []

@strawberry.type
class Query:
    @strawberry.field
    def hello_world(self) -> str:
        return "Hello from GQL server!"

    @strawberry.field
    async def items(self, info) -> List[ItemType]:
        return all_items


@strawberry.type
class Mutation:
    @strawberry.mutation
    async def add_item(self, name: str, description: str) -> ItemType:
        item = ItemType(name=name, description=description)
        all_items.append(item)
        return item


schema = strawberry.Schema(query=Query, mutation=Mutation)
graphql_app = GraphQLRouter(schema)

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}

@app.post("/items/")
async def create_item(item: ItemCreate, db: AsyncSession = Depends(get_async_session)):
    db_item = Item(name=item.name, description=item.description)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

app.include_router(graphql_app, prefix="/graphql")

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)