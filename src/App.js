import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import PromptPanel from './components/PromptPanel';
import MessageList from './components/MessageList';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {
  const text = message || input;
  if (!text.trim()) return;

  const userMessage = { sender: "user", text };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");

  try {
    const response = await fetch("http://127.0.0.1:8000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: text }),
    });

    if (response.ok) {
      const data = await response.json();
      const botMessage = { sender: "bot", text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      const errorMessage = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  } catch (error) {
    console.error("Error fetching response:", error);
    const errorMessage = {
      sender: "bot",
      text: "Network error. Please check your connection.",
    };
    setMessages((prev) => [...prev, errorMessage]);
  }
};


  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="p-4 overflow-y-auto flex-1 space-y-4">
        <p className="text-gray-500">Start chatting to get help.</p>
	<MessageList messages={messages} />
        <PromptPanel onSend={handleSend} />
      </div>
      <ChatInput
  	onSend={handleSend}
 	input={input}
  	setInput={setInput}
/>
    </div>
  );
}

export default App;
