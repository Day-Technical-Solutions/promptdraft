/** @format */

import ActionType from "./actions";
import { T2CFormData } from "./utils";

export function T2CReducer(
  formData: T2CFormData,
  action: { type: ActionType; payload: any }
) {
  switch (action.type) {
    case ActionType.UPDATE_THESPIAN:
      return {
        ...formData,
        thespian: action.payload,
      };
    case ActionType.UPDATE_CONTEXT:
      return {
        ...formData,
        context: action.payload,
      };
    case ActionType.UPDATE_OBJECTIVE:
      return {
        ...formData,
        objectvie: action.payload,
      };
    case ActionType.UPDATE_EXAMPLE:
      return {
        ...formData,
        example: action.payload,
      };
    case ActionType.UPDATE_CTA:
      return {
        ...formData,
        callToAction: action.payload,
      };
    case ActionType.UPDATE_SCOPE:
      return {
        ...formData,
        scope: action.payload,
      };
    case ActionType.UPDATE_FORMAT:
      return {
        ...formData,
        format: action.payload,
      };
    case ActionType.UPDATE_CONSTRAINTS:
      return {
        ...formData,
        constraints: action.payload,
      };
    case ActionType.UPDATE_LANGUAGE:
      return {
        ...formData,
        language: action.payload,
      };
    case ActionType.UPDATE_KEYTERMS:
      return {
        ...formData,
        keyTerms: action.payload,
      };
    case ActionType.UPDATE_TONE:
      return {
        ...formData,
        tone: action.payload,
      };
    case ActionType.UPDATE_URGENCY:
      return {
        ...formData,
        urgency: action.payload,
      };
    case ActionType.UPDATE_AUDIENCE:
      return {
        ...formData,
        audience: action.payload,
      };
    case ActionType.UPDATE_SENSITIVITY:
      return {
        ...formData,
        sensitivity: action.payload,
      };
    case ActionType.UPDATE_POV:
      return {
        ...formData,
        pointOfView: action.payload,
      };
    case ActionType.UPDATE_VISUAL_ELEMENTS:
      return {
        ...formData,
        visualElements: action.payload,
      };
    case ActionType.UPDATE_COUNTERARGUMENTS:
      return {
        ...formData,
        counterArguments: action.payload,
      };
    case ActionType.UPDATE_ANALOGIES:
      return {
        ...formData,
        analogies: action.payload,
      };
    case ActionType.UPDATE_STATISTICS:
      return {
        ...formData,
        statistics: action.payload,
      };
    case ActionType.UPDATE_CITATIONS:
      return {
        ...formData,
        citations: action.payload,
      };
    case ActionType.UPDATE_QUOTES:
      return {
        ...formData,
        quotes: action.payload,
      };
    default:
      return formData;
  }
}
