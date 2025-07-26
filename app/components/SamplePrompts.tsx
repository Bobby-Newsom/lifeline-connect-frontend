import React from "react";

const prompts = [
  "Where can I find housing help?",
  "I need food assistance",
  "What virtual services are available?"
];

export default function SamplePrompts({ onSend }: { onSend: (prompt: string) => void }) {
  return (
    <div className="mb-4 w-full max-w-4xl">
      <p className="mb-2 text-gray-500 font-medium">Try a sample question:</p>
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            className="text-sm border border-gray-300 rounded px-3 py-1 bg-white shadow hover:bg-gray-50 transition"
            onClick={() => onSend && onSend(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
