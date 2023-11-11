/** @format */

import { FormData } from "@components/TextToImage";
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
      case "Camera":
        const values = [
          ...Object.values(CameraLens),
          ...Object.values(CameraType),
          ...Object.values(CameraView),
        ];
        return values.sort((a, b) => {
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
  public static buildPromptTextToImage({
    subject,
    predicate,
    environment,
    extraDetails,
    photoArtStyle,
    realism,
    artMedium,
    timeOfDay,
    lighting,
    colorScheme,
    mood,
    influence,
    camera,
    magicWords,
  }: FormData): string {
    let prompt = "";
    //Main Subject
    prompt += subject;
    prompt += (predicate ? " " : "") + (predicate ?? "");
    prompt += (environment ? ", " : "") + (environment ?? "");
    prompt += (extraDetails ? ", " : "") + (extraDetails ?? "");

    //Photo / Art Style
    prompt +=
      photoArtStyle.size > 0 ? Array.from(photoArtStyle).join(", ") : "";

    //Realism
    prompt += realism.size > 0 ? Array.from(realism).join("") + ", " : "";

    //Art Medium
    prompt += artMedium.size > 0 ? Array.from(artMedium).join(", ") + ", " : "";

    //Camera
    prompt += camera.size > 0 ? Array.from(camera).join(", ") + ", " : "";

    //Time of Day
    prompt += timeOfDay.size > 0 ? Array.from(timeOfDay).join(", ") + ", " : "";

    //Lighting
    prompt += lighting.size > 0 ? Array.from(lighting).join(", ") + ", " : "";

    //Color Scheme
    prompt +=
      colorScheme.size > 0 ? Array.from(colorScheme).join(", ") + ", " : "";

    //Mood
    prompt += mood.size > 0 ? Array.from(mood).join(", ") + ", " : "";

    //Influence
    prompt +=
      influence.size > 0
        ? "art style of " + Array.from(influence).join(", ") + ", "
        : "";

    //Magic Words
    prompt += Array.from(magicWords).join(", ") + ", ";

    //Remove trailing comma and space
    prompt = prompt.slice(0, -2);

    return prompt;
  }
}
