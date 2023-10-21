/** @format */
"use client";
import React from "react";
import { useState } from "react";

export default function Tooltip({ info }: { info: string }) {
  const [show, setShow] = useState(false);
  const tooltip = (
    <div className=" font-light absolute ml-5 bg-slate-800 text-white rounded-lg p-2 text-xs">
      {info}
    </div>
  );
  return (
    <div className="flex">
      <div
        className="mx-1 bg-blue-600 rounded-full flex-center tooltip"
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <p className=" text-white ">?</p>
      </div>
      {show && tooltip}
    </div>
  );
}
