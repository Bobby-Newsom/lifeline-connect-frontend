import React, { useState } from "react";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { text: message, sender: "user" }]);
    setMessage("");
    // In the future, send to backend here
  };

  return (
    <div className="container p-3 border rounded bg-white shadow-sm">
      <div
        className="overflow-auto mb-3 p-2 border rounded bg-light"
        style={{ height: "16rem" }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 d-flex ${
              msg.sender === "user" ? "justify-content-end" : "justify-content-start"
            }`}
          >
            <span className="px-3 py-2 rounded bg-primary bg-opacity-10 text-dark small">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question..."
        />
        <button
          className="btn btn-primary"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
