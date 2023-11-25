/** @format */

import React from "react";
import Scope from "./Scope";
import Format from "./Format";
import Languages from "./Language";
import Tone from "./Tone";
import Urgency from "./Urgency";
import Sensitivity from "./Sensitivity";

export type SelectEnumType =
  | Scope
  | Format
  | Languages
  | Tone
  | Urgency
  | Sensitivity;

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
    //-----------------------------------------------------------------------------------------------
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
    //------------------------------------------------------------------------------------
    case Tone.FORMAL:
      return {
        info: "Characterized by a professional and respectful tone, suitable for serious or official contexts.",
        example: "",
      };
    case Tone.INFORMAL:
      return {
        info: "Conveys a relaxed and friendly tone, often used in casual conversations or less formal settings.",
        example: "",
      };
    case Tone.HUMOROUS:
      return {
        info: "Infused with humor and wit, aiming to entertain or lighten the mood.",
        example: "",
      };
    case Tone.SINCERE:
      return {
        info: "Genuine and heartfelt, expressing honesty and authenticity.",
        example: "",
      };
    case Tone.INQUISITIVE:
      return {
        info: "Poses questions and seeks information, encouraging a thoughtful response.",
        example: "",
      };
    case Tone.ENCOURAGING:
      return {
        info: "Motivational and positive, designed to uplift and inspire.",
        example: "",
      };
    case Tone.DIRECT:
      return {
        info: "Straightforward and to the point, minimizing unnecessary details.",
        example: "",
      };
    case Tone.PLAYFUL:
      return {
        info: "Lighthearted and cheerful, often incorporating elements of fun and playfulness.",
        example: "",
      };
    case Tone.ANALYTICAL:
      return {
        info: "Emphasizes a logical and systematic approach, suitable for problem-solving or analysis.",
        example: "",
      };
    case Tone.CAUTIOUS:
      return {
        info: "Approaches the subject with care and consideration, avoiding bold statements.",
        example: "",
      };
    case Tone.PERSUASIVE:
      return {
        info: "Convincing and compelling, designed to influence opinions or actions.",
        example: "",
      };
    case Tone.ENERGETIC:
      return {
        info: "Dynamic and vibrant, conveying enthusiasm and energy.",
        example: "",
      };
    case Tone.SERIOUS:
      return {
        info: "Solemn and grave, appropriate for discussions of weighty or sensitive topics.",
        example: "",
      };
    case Tone.CASUAL:
      return {
        info: "Relaxed and easygoing, often used in informal or friendly settings.",
        example: "",
      };
    case Tone.EMPATHETIC:
      return {
        info: "Demonstrates understanding and empathy, acknowledging emotions and feelings.",
        example: "",
      };
    //---------------------------------------------------------------------------------------------------------
    case Urgency.HIGH:
      return {
        info: "Requires immediate attention due to high urgency.",
        example: "",
      };
    case Urgency.MEDIUM:
      return {
        info: "Should be addressed in the near future with moderate urgency.",
        example: "",
      };
    case Urgency.LOW:
      return {
        info: "Can be handled with lower priority due to low urgency.",
        example: "",
      };
    case Urgency.ASAP:
      return {
        info: "Needs to be dealt with as soon as possible.",
        example: "",
      };
    case Urgency.NOT_URGENT:
      return {
        info: "No urgency. Can be handled at a relaxed pace.",
        example: "",
      };
    //-----------------------------------------------------------------------------------------------------------------
    case Sensitivity.EXTREME_SENSITIVITY:
      return {
        info: "Covers extremely sensitive topics; handle with the utmost care and discretion.",
        example: "",
      };
    case Sensitivity.HIGH_SENSITIVITY:
      return {
        info: "Involves highly sensitive subjects; exercise caution in communication.",
        example: "",
      };
    case Sensitivity.PARTIAL_SENSITIVITY:
      return {
        info: "Contains partially sensitive content; use discretion in communication.",
        example: "",
      };
    case Sensitivity.TRIVIAL:
      return {
        info: "Addresses trivial or non-sensitive topics; minimal precautions required.",
        example: "",
      };
    default:
      return {
        info: "",
        example: "",
      };
  }
}
