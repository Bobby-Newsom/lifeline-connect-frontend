import React from "react";

export default function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="text-center mb-4">
      <h1 className="text-4xl font-bold text-blue-600">
        {title || "LifeLine Connect"}
      </h1>
      <p className="text-gray-500 text-lg mt-2">{description}</p>
    </header>
  );
}
