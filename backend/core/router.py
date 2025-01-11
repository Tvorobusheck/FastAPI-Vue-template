from fastapi import FastAPI
from features.users.router import router as users_router

app = FastAPI()
app.include_router(users_router)
