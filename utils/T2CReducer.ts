/** @format */

import { T2CFormData } from "@app/generate/text-to-chat/page";
import ActionType from "./actions";

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
    default:
      return formData;
  }
}
