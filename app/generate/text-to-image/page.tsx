/** @format */
"use client";

import TextToImage from "@components/TextToImage";
import { T2IFormContext } from "@data/Contexts";
import { T2IReducer } from "@utils/T2IReducer";
import { useReducer } from "react";

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
