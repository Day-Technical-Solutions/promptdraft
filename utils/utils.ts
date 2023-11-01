/** @format */

import ArtMedium from "@data/ArtMedium";
import { CameraLens, CameraType, CameraView } from "@data/Camera";
import { CollectionEnumType, CollectionTypeMap } from "@data/CollectionTypeMap";
import ColorScheme from "@data/ColorScheme";
import Influence from "@data/Influence";
import Lighting from "@data/Lighting";
import MagicWords from "@data/MagicWords";
import Mood from "@data/Mood";
import PhotoArtStyle from "@data/PhotoArtStyle";
import Realism from "@data/Realism";
import TimeOfDay from "@data/TimeOfDay";

export class Utils {
  public static getInfoFromEnum(item: CollectionEnumType): {
    title: string;
    url: string;
  } {
    return CollectionTypeMap(item);
  }
  public static getDataFromCollectionType(
    enumType: string
  ): CollectionEnumType[] {
    switch (enumType) {
      case "PhotoArtStyle":
        return Object.values(PhotoArtStyle).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "ArtMedium":
        return Object.values(ArtMedium).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "ColorScheme":
        return Object.values(ColorScheme).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "Influence":
        return Object.values(Influence).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "Lighting":
        return Object.values(Lighting).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "Mood":
        return Object.values(Mood).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "Realism":
        return Object.values(Realism).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "TimeOfDay":
        return Object.values(TimeOfDay).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "CameraLens":
        return Object.values(CameraLens).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "CameraType":
        return Object.values(CameraType).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "CameraView":
        return Object.values(CameraView).sort((a, b) => {
          return a.localeCompare(b);
        });
      case "MagicWords":
        return Object.values(MagicWords).sort((a, b) => {
          return a.localeCompare(b);
        });
      default:
        return [];
    }
  }
}
