/** @format */
"use client";

import { CollectionEnumType } from "@data/CollectionTypeMap";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SelectCardRadio({
  title,
  src,
  text,
  handleRadio,
  radio,
  name,
}: {
  title: string;
  src: string;
  text: CollectionEnumType;
  handleRadio: (selection: CollectionEnumType) => void;
  radio: string;
  name: string;
}) {
  const [selected, setSelected] = useState(text === radio);

  useEffect(() => {
    setSelected(text === radio);
  }, [radio]);

  return (
    <div className="p-2">
      <div
        className={`noselect flex flex-col flex-center rounded-lg text-center w-max shadow-md cursor-pointer border-2 border-white border-opacity-0 ${
          selected ? "border-green" : ""
        }`}
        onClick={() => {
          handleRadio(text);
          setSelected((prev) => !prev);
        }}
      >
        <input
          form="texttoimage"
          name={`accordion_radio_` + name}
          type="radio"
          id={`${text}`}
          className="appearance-none"
          value={text}
          checked={selected}
          onChange={() => handleRadio(text)}
        />
        {selected && (
          <Image
            width={30}
            height={30}
            alt="logo"
            src={`${process.env.NEXT_PUBLIC_AWS_CDN_URL}/check.png`}
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
