import React from "react";

const ChatInput = ({ onSend, input, setInput, loading }: { onSend: () => void; input: string; setInput: (value: string) => void; loading: boolean }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSend();
  };

  return (
    <div className="border-t bg-white py-3 px-3 flex items-center">
      <input
        type="text"
        className="flex-1 border rounded-l px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type your message..."
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors" onClick={onSend} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
};

export default ChatInput;
