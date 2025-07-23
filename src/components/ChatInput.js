import React from "react";

const ChatInput = ({ onSend, input, setInput, loading }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSend();
  };

  return (
    <div className="border-top bg-white py-3 px-3 d-flex align-items-center">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button className="btn btn-primary" onClick={onSend} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
};

export default ChatInput;
