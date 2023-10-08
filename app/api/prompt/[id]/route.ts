/** @format */
// api/prompt/[id] route
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

type Params = {
  params: {
    id: string;
  };
};
//GET (read)
export const GET = async (req: Request, { params }: Params) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get post", { status: 500 });
  }
};

//PATCH (update)
export const PATCH = async (req: Request, { params }: Params) => {
  const { prompt, tag } = await req.json();

  try {
    const existingPrompt = await Prompt.findById(params.id);
    if (!prompt) return new Response("Prompt not found", { status: 404 });
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to update post", { status: 500 });
  }
};

//DELETE (delete)
export const DELETE = async (req: Request, { params }: Params) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndRemove(params.id);
    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete post", { status: 500 });
  }
};
