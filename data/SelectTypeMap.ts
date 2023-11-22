/** @format */

import React from "react";
import Scope from "./Scope";
import Format from "./Format";

export type SelectEnumType = Scope | Format;

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
    default:
      return {
        info: "",
        example: "",
      };
  }
}
