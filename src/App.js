import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatInput from './components/ChatInput';
import PromptPanel from './components/PromptPanel';
import MessageList from './components/MessageList';

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // auto-scroll
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (message) => {
    const text = message || input;
    if (!text.trim() || loading) return;

    const userMessage = { sender: "user", text };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
      });

      if (res.ok) {
        const data = await res.json();
        const botMessage = { sender: "bot", text: data.response, resources: data.resources };
        setMessages(prev => [...prev, botMessage]);
      } else {
        setMessages(prev => [...prev, { sender: "bot", text: "Sorry, something went wrong. Please try again." }]);
      }
    } catch (e) {
      console.error(e);
      setMessages(prev => [...prev, { sender: "bot", text: "Network error. Please check your connection." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column vh-100 bg-light">
      <div className="container py-3 overflow-auto flex-grow-1">
        <MessageList messages={messages} />
        <PromptPanel onSend={handleSend} />
        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={handleSend} input={input} setInput={setInput} loading={loading} />
    </div>
  );
}

export default App;
