/** @format */

"use client";

import ActionType from "@utils/actions";
import { createContext } from "react";

export type T2CFormData = {
  thespian: string;
  context: string;
  objective: string;
  example: string;
  callToAction: string;
  scope: string;
  format: string;
  constraints: string;
  language: string;
  keyTerms: string;
  tone: string;
  urgency: string;
  audience: string;
  sensitivity: string;
  pointOfView: string;
  visualElements: string;
  counterArguments: string;
  analogies: string;
  quotes: string;
  statistics: string;
  citations: string;
};

type T2CFormContextType = {
  formData: T2CFormData;
  dispatch: React.Dispatch<{
    type: ActionType;
    payload: any;
  }>;
};

export const T2CFormContext = createContext<T2CFormContextType | null>(null);

type T2IFormContextType = {
  formData: T2IFormData;
  dispatch: React.Dispatch<{
    type: ActionType;
    payload: any;
  }>;
};

export const T2IFormContext = createContext<T2IFormContextType | null>(null);

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
