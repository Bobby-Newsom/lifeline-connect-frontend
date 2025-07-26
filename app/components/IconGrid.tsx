import React from "react";

const categories = [
  { icon: "🏠", label: "Housing" },
  { icon: "🍎", label: "Food" },
  { icon: "💡", label: "Utilities" },
  { icon: "🧠", label: "Mental Health" },
  { icon: "💼", label: "Jobs" },
  { icon: "🚗", label: "Transport" },
];

export default function IconGrid({
  onSelect,
}: {
  onSelect: (label: string) => void;
}) {
  return (
    <div className="mx-auto px-0 mb-4 max-w-[480px]">
      <div className="grid grid-cols-3 gap-3">
        {categories.map((cat, idx) => (
          <div className="" key={idx}>
            <button
              type="button"
              className="w-full flex flex-col items-center py-3 bg-white rounded shadow hover:bg-gray-50 transition"
              onClick={() => onSelect && onSelect(cat.label)}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="mt-2 text-sm text-gray-800">{cat.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
