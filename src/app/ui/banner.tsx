"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  return (
    <div className="my-16">
      <h1 className="text-base sm:hidden">Jason A. Wise</h1>
      <span className="text-3xl font-bold text-orange-500">
        {"Web "}
        <Typewriter
          words={["Developer", "Engineer", "Inovater"]}
          cursor
          cursorStyle="|"
        />
      </span>
      <Link href="/about">
        <p className="text-xs mt-2 cursor-pointer">Learn More...</p>
      </Link>
    </div>
  );
}
