/** @format */
"use client";

import React, { useContext, useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import { T2CFormContext } from "@app/generate/text-to-chat/page";
import { Utils } from "@utils/utils";
import ActionType from "@utils/actions";

type SelectItem = {
  value: string;
  info: string;
  example: string;
};

export default function DropdownSelect({
  label,
  tooltip,
  enumType,
  action,
  useOptionTooltips = true,
}: {
  tooltip: string;
  label: string;
  enumType: string;
  action: ActionType;
  useOptionTooltips?: boolean;
}) {
  const [data, setData] = useState<SelectItem[]>([]);
  const [value, setValue] = useState("");
  const [info, setInfo] = useState("");
  const [example, setExample] = useState("");
  const { formData, dispatch } = useContext(T2CFormContext)!;

  useEffect(() => {
    const selectArray = Utils.getDataFromSelectType(enumType);
    const selectItems = selectArray.map((item) => ({
      ...Utils.getInfoFromSelectTypeEnum(item),
      value: item,
    }));
    setData(selectItems);
    setValue(selectItems[0].value);
  }, [enumType]);

  useEffect(() => {
    data.forEach((item) => {
      if (item.value === value) {
        setInfo(item.info);
        setExample(item.example);
      }
    });
    return dispatch({ type: action, payload: value });
  }, [value, action, data, dispatch]);

  return (
    <div>
      <label htmlFor={enumType}>
        <span className="font-satoshi font-semibold text-base text-gray-800 flex">
          {label}
          <Tooltip info={tooltip} />
        </span>
      </label>
      <div className="flex ">
        <select
          form="texttochat"
          id={enumType}
          name={enumType}
          className="p-2 rounded-lg mb-5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {data.map((item, index) => {
            return (
              <option
                key={index}
                value={item.value}
                lang={enumType === "Languages" ? item.info : ""}
              >
                {item.value}
              </option>
            );
          })}
        </select>
        {useOptionTooltips ? (
          <Tooltip info={info + (example ? " Eg. " + example : "")} />
        ) : null}
      </div>
    </div>
  );
}
