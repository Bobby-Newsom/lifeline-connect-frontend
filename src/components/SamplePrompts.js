import React from "react";

const prompts = [
  "Where can I find housing help?",
  "I need food assistance",
  "What virtual services are available?"
];

export default function SamplePrompts({ onSend }) {
  return (
    <div className="mb-4 w-100" style={{ maxWidth: "48rem" }}>
      <p className="mb-2 text-secondary fw-medium">Try a sample question:</p>
      <div className="d-flex flex-wrap gap-2">
        {prompts.map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            className="btn btn-sm btn-outline-secondary shadow-sm"
            onClick={() => onSend && onSend(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
