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
    <div className="w-full max-w-xl bg-white rounded shadow p-4">
      <div className="h-64 overflow-y-auto mb-4 bg-gray-50 p-2 rounded">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
          >
            <span className="inline-block px-3 py-2 rounded bg-blue-100 text-sm">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 border px-3 py-2 rounded-l"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question..."
        />
        <button
          className="bg-blue-600 text-white px-4 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
