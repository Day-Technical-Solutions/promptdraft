/** @format */
"use client";

import { CollectionEnumType } from "@data/CollectionTypeMap";
import Image from "next/image";
import React, { useState } from "react";

export default function SelectCard({
  title,
  src,
  text,
  handleCheckBox,
}: {
  title: string;
  src: string;
  text: CollectionEnumType;
  handleCheckBox: (selection: CollectionEnumType) => void;
}) {
  const [selected, setSelected] = useState(false);
  return (
    <div className="p-2">
      <div
        className={`noselect flex flex-col flex-center rounded-lg text-center w-max shadow-md cursor-pointer border-2 border-white border-opacity-0 ${
          selected ? "border-green" : ""
        }`}
        onClick={() => {
          handleCheckBox(text);
          setSelected((prev) => !prev);
        }}
      >
        <input
          form="texttoimage"
          type="checkbox"
          id={`${text}`}
          className="appearance-none"
          value={text}
          checked={selected}
        />
        {selected && (
          <Image
            width={30}
            height={30}
            alt="logo"
            src="/assets/images/check.png"
            className="object-contain checklogo rounded-full pointer-events-none noselect"
          />
        )}
        <Image
          src={src}
          width={300}
          height={300}
          alt={text}
          className="rounded-t-md object-fill pointer-events-none"
        />
        <p className="p-2">{title}</p>
      </div>
    </div>
  );
}
