/** @format */

import Generator from "@components/Generator";
import React from "react";

export default function Generate() {
  return (
    <div className="h-screen flex gap-6 flex-col">
      <h1 className="head_text blue_gradient">Choose Your Generator</h1>
      <Generator type="" image={null} />
      <Generator type="" image={null} />
      <Generator type="" image={null} />
    </div>
  );
}
