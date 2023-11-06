/** @format */

import React, { useEffect, useState } from "react";
import { TECollapse } from "tw-elements-react";
import { FormData } from "./TextToImage";
import SelectCardCheckbox from "./SelectCardCheckbox";
import { type CollectionEnumType } from "@data/CollectionTypeMap";
import PhotoArtStyle from "@data/PhotoArtStyle";
import { Utils } from "@utils/utils";
import SelectCardRadio from "./SelectCardRadio";

type props = {
  collection: Set<string>;
  label: string;
  tooltip: React.JSX.Element;
  enumType: string;
  useRadio?: boolean;
};

type CollectionItem = {
  title: string;
  url: string;
  text: CollectionEnumType;
};

export default function Accordion({
  collection,
  label,
  enumType,
  tooltip,
  useRadio,
}: props) {
  const [activeElement, setActiveElement] = useState("");
  const [data, setData] = useState<CollectionItem[]>([]);
  const [radio, setRadio] = useState("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  useEffect(() => {
    const collectionArray = Utils.getDataFromCollectionType(enumType);
    const collectionItems = collectionArray.map((item) => ({
      ...Utils.getInfoFromEnum(item),
      text: item,
    }));
    setData(collectionItems);
  }, []);

  const handleCheckBox = (selection: CollectionEnumType) => {
    if (collection.has(selection)) collection.delete(selection);
    else collection.add(selection);
    console.log(collection);
  };

  const handleRadio = (selection: CollectionEnumType) => {
    setRadio(selection);
    if (collection.has(selection)) {
      collection.clear();
      console.log(collection);
      return;
    } else {
      collection.clear();
      collection.add(selection);
    }

    console.log(collection);
  };
  return (
    <>
      <div id="accordionExample">
        <div className="rounded-lg  bg-white mb-3 ">
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
              <label>
                <span className="font-satoshi font-semibold text-base text-gray-800 flex">
                  {label}
                  {tooltip}
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
            <p className="p-5">
              {useRadio
                ? "Select One that applies: "
                : "Select all that apply:"}
            </p>
            <div className="px-5 py-4 flex-center">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.length ? (
                  data.map((item, index) => {
                    return (
                      <li key={index}>
                        {useRadio && (
                          <SelectCardRadio
                            key={index + item.title}
                            src={item.url}
                            text={item.text}
                            title={item.title}
                            handleRadio={handleRadio}
                            radio={radio}
                            name={label}
                          />
                        )}
                        {!useRadio && (
                          <SelectCardCheckbox
                            key={index + item.title}
                            src={item.url}
                            name={label}
                            text={item.text}
                            title={item.title}
                            handleCheckBox={handleCheckBox}
                          />
                        )}
                      </li>
                    );
                  })
                ) : useRadio ? (
                  <SelectCardRadio
                    key={1}
                    src={"/assets/images/placeholder.png"}
                    text={PhotoArtStyle.ABSTRACT}
                    title={"test"}
                    handleRadio={handleRadio}
                    radio={radio}
                    name={label}
                  />
                ) : (
                  <SelectCardCheckbox
                    key={1}
                    src={"/assets/images/placeholder.png"}
                    text={PhotoArtStyle.ABSTRACT}
                    title={"test"}
                    handleCheckBox={handleCheckBox}
                    name={label}
                  />
                )}
              </ul>
            </div>
          </TECollapse>
        </div>
      </div>
    </>
  );
}