/** @format */
"use client";

import TextToImage from "@components/TextToImage";
import React, { createContext, useReducer } from "react";
import { T2IReducer } from "@utils/T2IReducer";
import ActionType from "@utils/actions";

export type T2IFormData = {
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

type T2IFormContextType = {
  formData: T2IFormData;
  dispatch: React.Dispatch<{
    type: ActionType;
    payload: any;
  }>;
};

export const T2IFormContext = createContext<T2IFormContextType | null>(null);

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
  const [formData, dispatch] = useReducer(T2IReducer, initialState);

  return (
    <div className="min-h-screen w-full">
      <T2IFormContext.Provider value={{ formData, dispatch }}>
        <TextToImage />
      </T2IFormContext.Provider>
    </div>
  );
}

export default TextToImageForm;
