/** @format */

import { T2CFormData } from "@app/generate/text-to-chat/page";
import { T2IFormData } from "@app/generate/text-to-image/page";
import ArtMedium from "@data/ArtMedium";
import { CameraLens, CameraType, CameraView } from "@data/Camera";
import { CollectionEnumType, CollectionTypeMap } from "@data/CollectionTypeMap";
import ColorScheme from "@data/ColorScheme";
import Format from "@data/Format";
import Influence from "@data/Influence";
import Languages from "@data/Language";
import Lighting from "@data/Lighting";
import MagicWords from "@data/MagicWords";
import Mood from "@data/Mood";
import PhotoArtStyle from "@data/PhotoArtStyle";
import Realism from "@data/Realism";
import Scope from "@data/Scope";
import SelectTypeMap, { SelectEnumType } from "@data/SelectTypeMap";
import Sensitivity from "@data/Sensitivity";
import TimeOfDay from "@data/TimeOfDay";
import Tone from "@data/Tone";
import Urgency from "@data/Urgency";

export const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quae placeat sunt ullam veritatis harum ex vitae commodi sint velit. Aut consequatur accusantium velit maiores quo obcaecati inventore iure nostrum!";

export const metadata = {
  title: "Prompt Draft",
  description: "High Quality Prompts Made Easy",
};

export class Utils {
  public static getInfoFromCollectionEnum(item: CollectionEnumType): {
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

  public static getDataFromSelectType(enumType: string): SelectEnumType[] {
    switch (enumType) {
      case "Scope":
        return Object.values(Scope);
      case "Format":
        return Object.values(Format);
      case "Languages":
        return Object.values(Languages);
      case "Tone":
        return Object.values(Tone);
      case "Urgency":
        return Object.values(Urgency);
      case "Sensitivity":
        return Object.values(Sensitivity);
      default:
        return [];
    }
  }

  public static getInfoFromSelectTypeEnum(item: SelectEnumType): {
    info: string;
    example: string;
  } {
    return SelectTypeMap(item);
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
  }: T2IFormData): string {
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

  public static buildPromptTextToChat(): string {
    const prompt = `
    Consider yourself an expert prompt engineer, someone who creates great high quality prompts for language models like yourself.

    The provided JSON object represents a data structure in TypeScript for a form related to Text-to-Chat (T2C). Here's an analysis of its properties:
    
    thespian: Represents the character or persona involved in the conversation.
    
    context: Describes the contextual background or setting for the conversation.
    
    objective: Specifies the purpose or goal of the conversation.
    
    example: Potentially used to provide an illustrative instance or sample within the conversation.
    
    callToAction: Indicates any specific action or request made within the conversation.
    
    scope: Defines the extent or range covered by the conversation.
    
    format: Specifies the format or structure of the conversation, perhaps referring to a script or dialogue format.
    
    constraints: Describes any limitations or conditions applicable to the conversation.
    
    language: Refers to the linguistic style or choice of words in the conversation.
    
    keyTerms: Includes important and relevant terms or phrases in the conversation.
    
    tone: Represents the overall emotional or tonal quality of the conversation.
    
    urgency: Indicates any sense of immediacy or urgency within the conversation.
    
    audience: Describes the target audience or intended recipients of the conversation.
    
    sensitivity: Refers to the level of sensitivity or care needed in handling the conversation.
    
    pointOfView: Specifies the perspective or viewpoint presented in the conversation.
    
    visualElements: Use a prompt that ensures potentially includes descriptions of any visual elements associated with the conversation.
    
    counterArguments: Use a prompt that ensures addressing or including any counterarguments that might be relevant.
    
    analogies: Use a prompt that ensures referral to the use of analogies or comparisons within the conversation.
    
    quotes: Use a prompt that ensures including any quoted material or references within the conversation.
    
    statistics: Use a prompt that ensures the use or reference to statistical data within the conversation.
    
    citations: Use a prompt that specifies any sources or citations used within the conversation.
    
    Remember, you are taking this information and creating a prompt for a language model. If any data seems illegible, ignore it.

    Use this information to create a high quality, detailed prompt that you as a language model will understand clearly. Use Markdown text formatting when responding.
    `;
    return prompt;
  }
}
