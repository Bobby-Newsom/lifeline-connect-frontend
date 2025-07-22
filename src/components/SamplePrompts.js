import React from "react";

const prompts = [
  "Where can I find housing help?",
  "I need food assistance",
  "What virtual services are available?"
];

export default function SamplePrompts() {
  return (
    <div className="mb-6 w-full max-w-xl">
      <p className="mb-2 text-gray-600 font-medium">Try a sample question:</p>
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt, idx) => (
          <button
            key={idx}
            className="bg-white text-sm border px-4 py-2 rounded shadow hover:bg-blue-50"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
