from fastapi import FastAPI
from config.chroma_config import ChromaDb

# Init app
app = FastAPI()

# Init chroma
chroma = ChromaDb()