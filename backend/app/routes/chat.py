
from fastapi import APIRouter
from pydantic import BaseModel
from app.services.vertex_rag import query_rag

router = APIRouter()

class ChatRequest(BaseModel):
    question: str

@router.post("/")
def chat_with_rag(request: ChatRequest):
    return query_rag(request.question)
