/** @format */
"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function SelectCard({
  title,
  src,
  desc,
  handleClick,
}: {
  title: string;
  src: string;
  desc: string;
  handleClick: (selection: any) => void;
}) {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <div
        className={`noselect flex flex-col flex-center rounded-lg text-center w-max shadow-md cursor-pointer ${
          selected ? "border-green" : ""
        }`}
        onClick={() => {
          handleClick(title);
          setSelected((prev) => !prev);
        }}
      >
        <Image
          src={src}
          width={300}
          height={300}
          alt={desc}
          className="rounded-t-md object-fill pointer-events-none"
        />
        <p className="p-2">{title}</p>
      </div>
      {selected && (
        <Image
          width={30}
          height={30}
          alt="logo"
          src="/assets/images/check.png"
          className="object-contain relative checklogo rounded-full pointer-events-none noselect"
        />
      )}
    </div>
  );
}
