/** @format */

"use client";

import ActionType from "@utils/actions";
import React, { useContext } from "react";
import Tooltip from "./Tooltip";
import { T2CFormContext } from "@utils/utils";

export default function Radio({
  form,
  name,
  action,
  label,
  tooltip,
}: {
  form: string;
  name: string;
  action: ActionType;
  label: string;
  tooltip: string;
}) {
  const { dispatch } = useContext(T2CFormContext)!;

  return (
    <>
      <div className="font-satoshi font-semibold text-base text-gray-800 flex">
        {label} <Tooltip info={tooltip} />
      </div>
      <div className="px-4 flex gap-4 mb-4">
        <label>
          <input
            form={form}
            type="radio"
            name={name}
            value={"Yes"}
            onChange={(e) => {
              dispatch({
                type: action,
                payload: e.target.value,
              });
            }}
          />{" "}
          Yes{" "}
        </label>
        <label>
          <input
            form={form}
            type="radio"
            name={name}
            value={"No"}
            onChange={(e) => {
              dispatch({
                type: action,
                payload: e.target.value,
              });
            }}
          />{" "}
          No{" "}
        </label>
      </div>
    </>
  );
}
