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

const PromptPanel = ({ onSend }) => {
  return (
    <div className="p-3 bg-light rounded mb-3">
      {/* Sample prompts */}
      <div className="mb-4">
        <h2 className="h6 fw-semibold mb-2">Try a sample prompt:</h2>
        <div className="d-flex flex-wrap gap-2">
          {samplePrompts.map((text, index) => (
            <button
              type="button"
              key={index}
              onClick={() => onSend(text)}
              className="btn btn-sm btn-outline-secondary"
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Quick access icons */}
      <div>
        <h2 className="h6 fw-semibold mb-2">Quick access categories:</h2>
        <div className="d-flex flex-wrap gap-3">
          {icons.map((item, index) => (
            <button
              type="button"
              key={index}
              onClick={() => onSend(item.message)}
              className="btn btn-light border d-flex align-items-center gap-2 py-2 px-3"
            >
              <span className="fs-4">{item.emoji}</span>
              <span className="small">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptPanel;
