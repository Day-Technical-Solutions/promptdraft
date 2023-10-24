/** @format */

import Generator from "@components/Generator";
import { Image } from "next/dist/client/image-component";
import React from "react";

export default function Generate() {
  return (
    <div className="h-screen flex gap-6 flex-col mb-5 w-full">
      <h1 className="head_text blue_gradient">Choose Your Generator</h1>
      <Generator
        type="Text-to-Image"
        image={
          <Image
            src="/assets/images/generator_image.jpg"
            width={300}
            height={300}
            alt="generator"
            className="object-fill rounded-r-lg"
            priority
          />
        }
      />
      <Generator
        type="Text-to-Chat"
        image={
          <Image
            src="/assets/images/generator_chat.jpg"
            width={300}
            height={300}
            alt="generator"
            className="object-fill rounded-r-lg"
            priority
          />
        }
      />
      <Generator
        type="Image-to-Text"
        image={
          <Image
            src="/assets/images/generator_text.jpg"
            width={300}
            height={300}
            alt="generator"
            className="object-fill rounded-r-lg"
            priority
          />
        }
      />
    </div>
  );
}
