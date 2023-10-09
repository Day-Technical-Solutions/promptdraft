/** @format */

import React from "react";
import Image from "next/dist/client/image-component";

export default function Generator({
  type,
  image,
}: {
  type: string;
  image: typeof Image | null;
}) {
  return (
    <div>
      <p>Generator</p>
    </div>
  );
}
