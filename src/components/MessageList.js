import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div className="d-flex flex-column gap-2">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`px-3 py-2 rounded text-break ${
            msg.sender === "user"
              ? "bg-primary text-white align-self-end text-end"
              : "bg-light align-self-start text-start"
          }`}
          style={{ maxWidth: "75%" }}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
