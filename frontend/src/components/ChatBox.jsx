
import React, { useState } from 'react';
import axios from 'axios';

export default function ChatBox() {
  const [question, setQuestion] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const sendQuestion = async () => {
    if (!question) return;
    setChatLog([...chatLog, { type: 'user', text: question }]);
    setQuestion('');
    try {
      const res = await axios.post('http://localhost:8000/api/chat', { question });
      setChatLog((prev) => [...prev, { type: 'bot', text: res.data.answer }]);
    } catch (err) {
      setChatLog((prev) => [...prev, { type: 'bot', text: 'Error fetching response' }]);
    }
  };

  return (
    <div>
      <div>
        {chatLog.map((entry, i) => (
          <div key={i} style={{ textAlign: entry.type === 'user' ? 'right' : 'left' }}>
            <p><b>{entry.type === 'user' ? 'You' : 'Bot'}:</b> {entry.text}</p>
          </div>
        ))}
      </div>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendQuestion()}
        placeholder="Ask something..."
      />
      <button onClick={sendQuestion}>Send</button>
    </div>
  );
}
