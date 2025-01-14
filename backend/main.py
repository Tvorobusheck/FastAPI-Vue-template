from core.config import RELOAD

if __name__ == '__main__':
    import uvicorn
    uvicorn.run("core.router:app", host="0.0.0.0", port=8000, reload=RELOAD)