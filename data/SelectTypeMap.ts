/** @format */

import React from "react";
import Scope from "./Scope";
import Format from "./Format";
import Languages from "./Language";

export type SelectEnumType = Scope | Format | Languages;

export default function SelectTypeMap(enumType: SelectEnumType) {
  switch (enumType) {
    case Scope.CATEGORY_EXPLORATION:
      return {
        info: "Explore a specific category or aspect within the subject.",
        example:
          "Discuss various applications of artificial intelligence in healthcare.",
      };
    case Scope.COMPARATIVE_ANALYSIS:
      return {
        info: "Compare and contrast different elements or approaches within the subject.",
        example:
          "Compare the advantages and disadvantages of various programming languages for web development.",
      };
    case Scope.SCENARIO_BASED_PROMPT:
      return {
        info: "Pose a hypothetical scenario related to the subject.",
        example:
          "Imagine a future where renewable energy sources dominate. Describe the societal changes and challenges that might arise.",
      };
    case Scope.DETAILED_INQUIRY:
      return {
        info: "Ask for in-depth information on a specific sub-topic.",
        example:
          "Examine the role of neurotransmitters in synaptic transmission, detailing their functions and impact on neural communication.",
      };
    case Scope.HIGH_LEVEL_CONCEPT:
      return {
        info: "Generate a brief overview or introduction to the given subject.",
        example:
          "Provide a general overview of artificial intelligence and its impact on society.",
      };
    case Languages.EN:
      return {
        info: "en",
        example: "",
      };
    case Languages.ES:
      return {
        info: "es",
        example: "",
      };
    case Languages.FR:
      return {
        info: "fr",
        example: "",
      };
    case Languages.DE:
      return {
        info: "de",
        example: "",
      };
    case Languages.ZH_HANS:
      return {
        info: "zh-Hans",
        example: "",
      };
    case Languages.ZH_HANT:
      return {
        info: "zh-Hant",
        example: "",
      };
    case Languages.JA:
      return {
        info: "ja",
        example: "",
      };
    case Languages.KO:
      return {
        info: "ko",
        example: "",
      };
    case Languages.RU:
      return {
        info: "ru",
        example: "",
      };
    case Languages.AR:
      return {
        info: "ar",
        example: "",
      };
    case Languages.HI:
      return {
        info: "hi",
        example: "",
      };
    case Languages.PT:
      return {
        info: "pt",
        example: "",
      };
    case Languages.IT:
      return {
        info: "it",
        example: "",
      };
    case Languages.NL:
      return {
        info: "nl",
        example: "",
      };
    case Languages.SV:
      return {
        info: "sv",
        example: "",
      };
    case Languages.TR:
      return {
        info: "tr",
        example: "",
      };
    case Languages.VI:
      return {
        info: "vi",
        example: "",
      };
    case Languages.EL:
      return {
        info: "el",
        example: "",
      };
    case Languages.HE:
      return {
        info: "he",
        example: "",
      };
    case Languages.PL:
      return {
        info: "pl",
        example: "",
      };
    case Languages.TH:
      return {
        info: "th",
        example: "",
      };
    case Languages.ID:
      return {
        info: "id",
        example: "",
      };
    case Languages.FI:
      return {
        info: "fi",
        example: "",
      };
    case Languages.CS:
      return {
        info: "cs",
        example: "",
      };
    case Languages.RO:
      return {
        info: "ro",
        example: "",
      };
    case Languages.DA:
      return {
        info: "da",
        example: "",
      };
    case Languages.NO:
      return {
        info: "no",
        example: "",
      };
    case Languages.HU:
      return {
        info: "hu",
        example: "",
      };
    case Languages.BN:
      return {
        info: "bn",
        example: "",
      };
    case Languages.MS:
      return {
        info: "ms",
        example: "",
      };
    case Languages.SK:
      return {
        info: "sk",
        example: "",
      };
    case Languages.BG:
      return {
        info: "bg",
        example: "",
      };
    case Languages.HR:
      return {
        info: "hr",
        example: "",
      };
    case Languages.LV:
      return {
        info: "lv",
        example: "",
      };
    case Languages.LT:
      return {
        info: "lt",
        example: "",
      };
    case Languages.HT:
      return {
        info: "ht",
        example: "",
      };
    default:
      return {
        info: "",
        example: "",
      };
  }
}
