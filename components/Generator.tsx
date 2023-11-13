/** @format */
"use client";

import React, { ReactElement } from "react";
import { Image } from "next/dist/client/image-component";
import { useRouter } from "next/navigation";

export default function Generator({
  type,
  image,
}: {
  type: string;
  image: ReactElement;
}) {
  const router = useRouter();

  return (
    <div
      className="flex flex-row rounded-lg items-center drop-shadow-lg transition-all cursor-pointer"
      onClick={() => {
        switch (type) {
          case "Text-to-Image":
            return router.push("/generate/text-to-image");
          case "Text-to-Chat":
            return router.push("/generate/text-to-chat");
          case "Image-to-Text":
            return router.push("/generate/image-to-text");
          default:
            return null;
        }
      }}
    >
      <div className="flex flex-center w-full rounded-l-lg min-h-full border drop-shadow-sm hover:bg-blue-300 transition-all ">
        <p className="subHead_text text-center">{`${type}`}</p>
      </div>
      <div className="">
        {image}
        {!image && (
          <Image
            src="/assets/images/placeholder.png"
            width={300}
            height={300}
            alt="generator"
            className="object-fill rounded-r-lg"
            priority
          />
        )}
      </div>
    </div>
  );
}
