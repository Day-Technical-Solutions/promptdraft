/** @format */

import { FormData } from "@app/generate/text-to-image/page";
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
    prompt += photoArtStyle.length > 0 ? ", " + photoArtStyle.join(", ") : "";

    //Realism
    prompt += realism.length > 0 ? ", " + realism.join("") : "";

    //Art Medium
    prompt += artMedium.length > 0 ? ", " + artMedium.join(", ") : "";

    //Camera
    prompt += camera.length > 0 ? ", " + camera.join(", ") : "";

    //Time of Day
    prompt += timeOfDay.length > 0 ? ", " + timeOfDay.join(", ") : "";

    //Lighting
    prompt += lighting.length > 0 ? ", " + lighting.join(", ") : "";

    //Color Scheme
    prompt += colorScheme.length > 0 ? ", " + colorScheme.join(", ") : "";

    //Mood
    prompt += mood.length > 0 ? ", " + mood.join(", ") : "";

    //Influence
    prompt +=
      influence.length > 0 ? ", art style of " + influence.join(", ") : "";

    //Magic Words
    prompt += ", " + magicWords.join(", ");

    //Remove trailing comma and space
    if (prompt.slice(prompt.length - 2, prompt.length).includes(","))
      prompt = prompt.slice(0, prompt.length - 2);
    return prompt;
  }
}
