import React from "react";

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

const PromptPanel = ({ onSend }: { onSend: (prompt: string) => void }) => {
  return (
    <div className="p-3 bg-gray-100 rounded mb-3">
      {/* Sample prompts */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold mb-2">Try a sample prompt:</h2>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((text, index) => (
            <button
              type="button"
              key={index}
              onClick={() => onSend(text)}
              className="text-sm border border-gray-300 rounded px-3 py-1 bg-white shadow hover:bg-gray-50 transition"
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Quick access icons */}
      <div>
        <h2 className="text-sm font-semibold mb-2">Quick access categories:</h2>
        <div className="flex flex-wrap gap-3">
          {icons.map((item, index) => (
            <button
              type="button"
              key={index}
              onClick={() => onSend(item.message)}
              className="bg-white border rounded flex items-center gap-2 py-2 px-3 hover:bg-gray-50 transition"
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptPanel;
