from core.config import RELOAD, PORT, DEBUG

if __name__ == '__main__':
    import uvicorn
    uvicorn.run("core.router:app", host="0.0.0.0", port=PORT, reload=RELOAD, 
                log_level="debug" if DEBUG else "info")