/** @format */
"use client";

import TextToImage from "@components/TextToImage";
import React, { createContext, useReducer } from "react";
import { reducer } from "@utils/reducer";
import ActionType from "@utils/actions";

export type FormData = {
  subject: string;
  predicate: string;
  environment: string;
  extraDetails: string;
  photoArtStyle: string[];
  realism: string[];
  artMedium: string[];
  timeOfDay: string[];
  lighting: string[];
  colorScheme: string[];
  mood: string[];
  influence: string[];
  camera: string[];
  magicWords: string[];
};

type FormContextType = {
  formData: FormData;
  dispatch: React.Dispatch<{
    type: ActionType;
    payload: any;
  }>;
};

export const FormContext = createContext<FormContextType | null>(null);

function TextToImageForm() {
  const initialState = {
    subject: "",
    predicate: "",
    environment: "",
    extraDetails: "",
    photoArtStyle: [],
    realism: [],
    artMedium: [],
    timeOfDay: [],
    lighting: [],
    colorScheme: [],
    mood: [],
    influence: [],
    camera: [],
    magicWords: [],
  };
  const [formData, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen w-full">
      <FormContext.Provider value={{ formData, dispatch }}>
        <TextToImage />
      </FormContext.Provider>
    </div>
  );
}

export default TextToImageForm;
