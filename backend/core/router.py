from fastapi import FastAPI
from features.users.router import router as users_router
from features.items.router import router as items_router

app = FastAPI()
app.include_router(users_router)
app.include_router(items_router)
