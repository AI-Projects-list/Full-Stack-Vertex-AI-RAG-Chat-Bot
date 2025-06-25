
from PyPDF2 import PdfReader

def process_pdf(file_path: str):
    reader = PdfReader(file_path)
    chunks = []
    for page in reader.pages:
        text = page.extract_text()
        if text:
            chunks.extend([text[i:i+500] for i in range(0, len(text), 500)])
    return chunks
