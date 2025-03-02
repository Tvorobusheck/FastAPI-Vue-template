from fastapi import FastAPI
from contextlib import asynccontextmanager

from core.db import create_db_and_tables, drop_db_and_tables
from core.config import MOCKDB
from features.users.common.router import router as users_router
from features.items.router import router as items_router

from fastapi.middleware.cors import CORSMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):
    if MOCKDB:
        await create_db_and_tables()
    yield
    if MOCKDB:
        await drop_db_and_tables()


app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:8001",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users_router)
app.include_router(items_router)
