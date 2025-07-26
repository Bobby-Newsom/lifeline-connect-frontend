import React, { useState } from "react";

export interface Message {
  text: string;
  sender: string;
}

export default function ChatBox() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { text: message, sender: "user" }]);
    setMessage("");
    // In the future, send to backend here
  };

  return (
    <div className="p-3 border rounded bg-white shadow shadow-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div
        className="overflow-auto mb-3 p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
        style={{ height: "16rem" }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
          >
            <span className="px-3 py-2 rounded bg-blue-500/10 text-gray-900 text-sm dark:bg-blue-400/10 dark:text-gray-100">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 border rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
