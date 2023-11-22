/** @format */
"use client";

import TextToChat from "@components/TextToChat";
import { T2CReducer } from "@utils/T2CReducer";
import ActionType from "@utils/actions";
import React, { createContext, useReducer } from "react";

export type T2CFormData = {
  thespian: string;
  context: string;
  objective: string;
  example: string;
  callToAction: string;
  scope: string;
  format: string;
};

type T2CFormContextType = {
  formData: T2CFormData;
  dispatch: React.Dispatch<{
    type: ActionType;
    payload: any;
  }>;
};

export const T2CFormContext = createContext<T2CFormContextType | null>(null);

function TextToChatForm() {
  const initialState = {
    thespian: "",
    context: "",
    objective: "",
    example: "",
    callToAction: "",
    scope: "",
    format: "",
  };

  const [formData, dispatch] = useReducer(T2CReducer, initialState);

  return (
    <div className="min-h-screen w-full">
      <T2CFormContext.Provider value={{ formData, dispatch }}>
        <TextToChat />
      </T2CFormContext.Provider>
    </div>
  );
}

export default TextToChatForm;
