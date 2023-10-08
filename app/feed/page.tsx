/** @format */

import Feed from "@components/Feed";
import React from "react";

export default function FeedPage() {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center ">
        <span className="blue_gradient ">Prompt Feed</span>
      </h1>
      <p className="desc text-center">
        Explore new heights of creativity with our prompt search, offering
        high-quality prompts tailored to your preferences. Elevate your creative
        journey and discover limitless possibilities at your fingertips.
      </p>
      <Feed />
    </section>
  );
}
