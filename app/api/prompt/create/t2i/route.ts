/** @format */
// api/prompt/create/t2i route
import { T2IFormData } from "@app/generate/text-to-image/page";
import { Utils } from "@utils/utils";

export const POST = async (req: Request) => {
  const formData: T2IFormData = await req.json();
  console.log(formData);
  try {
    const generatedPrompt = Utils.buildPromptTextToImage(formData);
    console.log(generatedPrompt);
    return new Response(JSON.stringify(generatedPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate prompt", { status: 500 });
  }
};
