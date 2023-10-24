/** @format */

import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import Tooltip from "./Tooltip";

export default function Accordion(
  collection: any,
  setCollection: any,
  options: any
) {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <div id="accordionExample">
        <div className="rounded-lg  bg-white ">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${
                activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
              } group relative flex w-full items-center rounded-lg border-0 bg-blue-50 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <label htmlFor="photo_art_style">
                <span className="font-satoshi font-semibold text-base text-gray-800 flex">
                  Photo/Art Style
                  <Tooltip info="What kind of art style or composition should this image have?" />
                </span>
              </label>
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] `
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0 !rounded-t-none !shadow-none transition-all"
          >
            <p className="p-5">Select all that apply:</p>
            <div className="px-5 py-4">
              <strong>This is the first item's accordion body.</strong> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
      </div>
    </>
  );
}
