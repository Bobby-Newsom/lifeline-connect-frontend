import React from "react";
import ResourceList from "./ResourceList";

const MessageList = ({ messages }) => {
  return (
    <div className="d-flex flex-column gap-2">
      {messages.map((msg, index) => {
        const isUser = msg.sender === "user";
        return (
          <div
            key={index}
            className={`p-2 rounded-3 shadow-sm ${isUser ? "bg-primary text-white align-self-end" : "bg-white text-dark align-self-start"}`}
            style={{ maxWidth: "80%" }}
          >
            <div className="mb-1">{msg.text}</div>

            {/* Render resources only on bot messages and when present */}
            {!isUser && msg.resources && msg.resources.length > 0 && (
              <ResourceList resources={msg.resources} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
