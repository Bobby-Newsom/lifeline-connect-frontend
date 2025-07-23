// src/App.js
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ChatInput from "./components/ChatInput";
import PromptPanel from "./components/PromptPanel";
import MessageList from "./components/MessageList";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // auto-scroll to newest message
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (promptFromButton) => {
    const text = promptFromButton || input;
    if (!text.trim() || loading) return;

    // push user message
    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);
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
        // attach resources array (may be undefined)
        const botMessage = {
          sender: "bot",
          text: data.response,
          resources: data.resources || [],
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Sorry, something went wrong. Please try again." },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Network error. Please check your connection." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column vh-100 bg-light">
      {/* Scrollable main area */}
      <div className="container py-3 flex-grow-1 overflow-auto">
        <MessageList messages={messages} />
        <PromptPanel onSend={handleSend} />
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <ChatInput
        onSend={handleSend}
        input={input}
        setInput={setInput}
        loading={loading}
      />

      {/* Simple loading overlay */}
      {loading && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25">
          <div className="spinner-border text-primary" role="status" />
        </div>
      )}
    </div>
  );
}

export default App;
