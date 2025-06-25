
from fastapi import APIRouter, File, UploadFile
from app.services.pdf_processor import process_pdf
import os

router = APIRouter()

@router.post("/")
async def upload_file(file: UploadFile = File(...)):
    filepath = f"data/{file.filename}"
    with open(filepath, "wb") as f:
        f.write(await file.read())
    chunks = process_pdf(filepath)
    return {"filename": file.filename, "chunks": chunks}
