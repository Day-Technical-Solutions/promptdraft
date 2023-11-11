/** @format */
import { FormData } from "@app/generate/text-to-image/page";
import ActionType from "./actions";

export function reducer(
  formData: FormData,
  action: { type: ActionType; payload: any }
) {
  switch (action.type) {
    case ActionType.UPDATE_SUBJECT:
      return {
        ...formData,
        subject: action.payload,
      };
    case ActionType.UPDATE_PREDICATE:
      return {
        ...formData,
        predicate: action.payload,
      };
    case ActionType.UPDATE_ENV:
      return {
        ...formData,
        environment: action.payload,
      };
    case ActionType.UPDATE_EXTRA_DETAILS:
      return {
        ...formData,
        extraDetails: action.payload,
      };
    case ActionType.UPDATE_RADIO:
      return {
        ...formData,
        realism: action.payload,
      };
    case ActionType.UPDATE_CHECKBOX:
      const { collection, value } = action.payload;
      switch (collection) {
        case formData.artMedium:
          return {
            ...formData,
            artMedium: value,
          };
        case formData.camera:
          return {
            ...formData,
            camera: value,
          };
        case formData.colorScheme:
          return {
            ...formData,
            colorScheme: value,
          };
        case formData.influence:
          return {
            ...formData,
            influence: value,
          };
        case formData.lighting:
          return {
            ...formData,
            lighting: value,
          };
        case formData.magicWords:
          return {
            ...formData,
            magicWords: value,
          };
        case formData.mood:
          return {
            ...formData,
            mood: value,
          };
        case formData.photoArtStyle:
          return {
            ...formData,
            photoArtStyle: value,
          };
        case formData.timeOfDay:
          return {
            ...formData,
            timeOfDay: value,
          };
        default:
          return formData;
      }
    default:
      return formData;
  }
}
