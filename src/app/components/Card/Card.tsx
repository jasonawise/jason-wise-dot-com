import React from "react";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className={`border border-gray-200 rounded-md shadow hover:bg-gray-100 hover:shadow-sm p-4 min-w-80 max-w-full`}
    >
      {children}
    </div>
  );
}
