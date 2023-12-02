/** @format */
"use client";

import TextToChat from "@components/TextToChat";
import { T2CFormContext } from "@data/Contexts";
import { T2CReducer } from "@utils/T2CReducer";
import React, { useReducer } from "react";

function TextToChatForm() {
  const initialState = {
    thespian: "",
    context: "",
    objective: "",
    example: "",
    callToAction: "",
    scope: "",
    format: "",
    constraints: "",
    language: "",
    keyTerms: "",
    tone: "",
    urgency: "",
    audience: "",
    sensitivity: "",
    pointOfView: "",
    visualElements: "",
    counterArguments: "",
    analogies: "",
    quotes: "",
    statistics: "",
    citations: "",
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
