
# Vertex AI RAG PDF Chatbot (Full Stack)

This is a full-stack project for a document-based chatbot using Google Vertex AI, Retrieval-Augmented Generation (RAG), and LLMs. It allows users to upload PDFs and ask questions related to their content via a web interface.

---

## 🚀 Features

- Upload PDF documents
- Extract and chunk PDF text
- Ask questions in a chat interface
- Integrates with Google Vertex AI (mock in current version)
- Clean, modular FastAPI + React architecture

---

## 🧱 Backend (FastAPI)

### 📁 Structure
- `main.py`: FastAPI app entry point
- `app/routes/upload.py`: PDF upload endpoint
- `app/routes/chat.py`: Chat endpoint
- `app/services/pdf_processor.py`: Extracts and chunks PDF content
- `app/services/vertex_rag.py`: Placeholder for real Vertex AI RAG logic

### ▶️ Run
```bash
cd vertex_rag_pdf_chatbot_backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

---

## 🌐 Frontend (React + Vite)

### 📁 Structure
- `FileUpload.jsx`: Uploads PDFs
- `ChatBox.jsx`: Simple chat interface
- Uses Axios for backend interaction

### ▶️ Run
```bash
cd vertex_rag_pdf_chatbot_frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

- `POST /api/upload`: Upload a PDF file
- `POST /api/chat`: Ask a question

---

## 🔜 To Do

- Integrate real Vertex AI Embeddings & LLM
- Store chunked documents in a vector DB (e.g., FAISS, Chroma)
- Add document source highlighting
- User auth & multiple session handling

---

## 🧠 Powered by

- Google Cloud Vertex AI
- FastAPI
- React (Vite)
- PyPDF2
- Axios

