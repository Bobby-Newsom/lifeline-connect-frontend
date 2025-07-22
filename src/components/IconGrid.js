import React from "react";

const categories = [
  { icon: "🏠", label: "Housing" },
  { icon: "🍎", label: "Food" },
  { icon: "💡", label: "Utilities" },
  { icon: "🧠", label: "Mental Health" },
  { icon: "💼", label: "Jobs" },
  { icon: "🚗", label: "Transport" },
];

export default function IconGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6 max-w-sm">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className="flex flex-col items-center p-4 bg-white rounded shadow hover:bg-blue-50"
        >
          <span className="text-3xl">{cat.icon}</span>
          <span className="mt-2 text-sm text-gray-800">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
