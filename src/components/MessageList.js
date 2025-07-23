import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="space-y-2 overflow-y-auto max-h-[60vh]">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg max-w-xs ${
            msg.sender === 'user'
              ? 'bg-blue-500 text-white self-end ml-auto'
              : 'bg-gray-300 text-black self-start mr-auto'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
