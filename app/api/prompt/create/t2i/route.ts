/** @format */
// api/prompt/create/t2i route
import { T2IFormData } from "@data/Contexts";
import { Utils } from "@utils/utils";

export const POST = async (req: Request) => {
  const formData = await req.json();
  console.log(formData);
  const generatedPrompt = Utils.buildPromptTextToImage(formData);
  console.log(generatedPrompt);
  try {
    return new Response(JSON.stringify(generatedPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate prompt", { status: 500 });
  }
};
