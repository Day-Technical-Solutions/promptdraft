/** @format */
// api/prompt/create route
import { FormData } from "@app/generate/text-to-image/page";
import { Utils } from "@utils/utils";
type Request = {
  json: () => PromiseLike<FormData> | FormData;
};

export const POST = async (req: Request) => {
  const formData = await req.json();
  console.log(formData);
  try {
    const generatedPrompt = Utils.buildPromptTextToImage(formData);
    console.log(generatedPrompt);
    return new Response(JSON.stringify(generatedPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate prompt", { status: 500 });
  }
};
