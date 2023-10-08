/** @format */

"use client";
import React from "react";
import { useRouter } from "next/navigation";

function CTA() {
  const router = useRouter();

  return (
    <div>
      <div className="cta m-5">
        <button
          onClick={() => router.push("/generate")}
          className="group relative h-12 w-48 overflow-hidden rounded-md  bg-blue-400 text-lg shadow hover:scale-110 transition-all duration-[250ms] ease-in-out"
        >
          <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full "></div>
          <span className="relative text-white group-hover:text-blue-400">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
}

export default CTA;
