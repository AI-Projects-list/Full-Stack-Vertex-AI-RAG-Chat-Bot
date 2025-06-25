
import React from 'react';
import FileUpload from './components/FileUpload';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📄 Vertex RAG PDF Chatbot</h1>
      <FileUpload />
      <hr style={{ margin: '2rem 0' }} />
      <ChatBox />
    </div>
  );
}

export default App;
