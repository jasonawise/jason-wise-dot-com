import React from "react";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <div className="border border-black p-4 max-w-80">{children}</div>;
}
