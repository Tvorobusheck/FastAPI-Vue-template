from fastapi import FastAPI
from contextlib import asynccontextmanager

from core.db import MOCKDB, create_db_and_tables, drop_db_and_tables
from features.users.router import router as users_router
from features.items.router import router as items_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    if MOCKDB:
        await create_db_and_tables()
    yield
    if MOCKDB:
        await drop_db_and_tables()


app = FastAPI(lifespan=lifespan)
app.include_router(users_router)
app.include_router(items_router)
