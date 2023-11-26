/** @format */
// api/prompt/create/t2i route
import { T2CFormData } from "@app/generate/text-to-chat/page";
import { Utils } from "@utils/utils";
type Request = {
  json: () => PromiseLike<T2CFormData> | T2CFormData;
};

export const POST = async (req: Request) => {
  const formData = await req.json();
  console.log(formData);
  try {
    console.log("REQUEST RECIEVED");
    const generatedPrompt = "GPT CALL GOES HERE.";
    return new Response(JSON.stringify(generatedPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate prompt", { status: 500 });
  }
};
