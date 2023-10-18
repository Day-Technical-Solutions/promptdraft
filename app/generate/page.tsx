/** @format */

import Generator from "@components/Generator";
import React from "react";

export default function Generate() {
  return (
    <div className="h-screen flex gap-6 flex-col mb-5 w-full">
      <h1 className="head_text blue_gradient">Choose Your Generator</h1>
      <Generator type="Text-to-Image" image={null} />
      <Generator type="Text-to-Chat" image={null} />
      <Generator type="Image-to-Text" image={null} />
    </div>
  );
}
