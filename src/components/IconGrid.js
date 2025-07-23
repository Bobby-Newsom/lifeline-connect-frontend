import React from "react";

const categories = [
  { icon: "🏠", label: "Housing" },
  { icon: "🍎", label: "Food" },
  { icon: "💡", label: "Utilities" },
  { icon: "🧠", label: "Mental Health" },
  { icon: "💼", label: "Jobs" },
  { icon: "🚗", label: "Transport" },
];

export default function IconGrid({ onSelect }) {
  return (
    <div className="container px-0 mb-4" style={{ maxWidth: 480 }}>
      <div className="row row-cols-3 g-3">
        {categories.map((cat, idx) => (
          <div className="col" key={idx}>
            <button
              type="button"
              className="btn btn-light w-100 d-flex flex-column align-items-center py-3 shadow-sm"
              onClick={() => onSelect && onSelect(cat.label)}
            >
              <span className="fs-2">{cat.icon}</span>
              <span className="mt-2 small text-dark">{cat.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
