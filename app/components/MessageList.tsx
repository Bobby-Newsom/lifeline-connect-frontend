import React from "react";
import ResourceList from "./ResourceList";

const MessageList = ({ messages }: { messages: any[] }) => {
  return (
    <div className="flex flex-col gap-3 py-2">
      {messages.map((msg, index) => {
        const isUser = msg.sender === "user";
        return (
          <div
            key={index}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-2xl px-4 py-2 shadow-sm max-w-[80%] text-sm whitespace-pre-line
                ${isUser
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700"}
              `}
            >
              <div className="mb-1">{msg.text}</div>
              {/* Render resources only on bot messages and when present */}
              {!isUser && msg.resources && msg.resources.length > 0 && (
                <div className="mt-2">
                  <ResourceList resources={msg.resources} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
