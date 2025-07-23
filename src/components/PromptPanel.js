import React from 'react';

const samplePrompts = [
  "I need help finding housing.",
  "Where can I get food today?",
  "My power might get shut off.",
  "I need to see a therapist.",
  "Are there shelters near me?"
];

const icons = [
  { label: "Housing", emoji: "🏠", message: "I need housing assistance" },
  { label: "Food", emoji: "🍽️", message: "Where can I get food" },
  { label: "Utilities", emoji: "💡", message: "Help with utility bills" },
  { label: "Health", emoji: "🚑", message: "I need medical help" },
  { label: "Mental Health", emoji: "🧠", message: "I need to talk to someone" }
];

const PromptPanel = ({ onSend }) => {
  return (
    <div className="p-4 bg-gray-200 space-y-4">
      <div>
        <h2 className="font-semibold mb-2">Try a sample prompt:</h2>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((text, index) => (
            <button
              key={index}
              onClick={() => onSend(text)}
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-semibold mb-2">Quick access categories:</h2>
        <div className="flex flex-wrap gap-3">
          {icons.map((item, index) => (
            <button
              key={index}
              onClick={() => onSend(item.message)}
              className="flex items-center gap-2 px-4 py-2 bg-white border rounded hover:bg-gray-100"
            >
              <span className="text-xl">{item.emoji}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptPanel;
