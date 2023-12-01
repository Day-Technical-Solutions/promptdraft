/** @format */
"use client";

import TextToImage from "@components/TextToImage";
import React, { useReducer } from "react";
import { T2IReducer } from "@utils/T2IReducer";
import { T2IFormContext } from "@utils/utils";

export default function TextToImageForm() {
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
