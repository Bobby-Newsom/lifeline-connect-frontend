import React from "react";

const ChatInput = ({ onSend, input, setInput }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  return (
    <div className="p-4 bg-white border-t flex items-center">
      <input
        className="flex-1 p-2 border rounded mr-2"
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onSend}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
