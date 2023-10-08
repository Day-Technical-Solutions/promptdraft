/** @format */
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
// api/prompt/new route
type Request = {
  json: () =>
    | PromiseLike<{ userID: string; prompt: string; tag: string }>
    | { userID: string; prompt: string; tag: string };
};
export const POST = async (req: Request) => {
  const { userID, prompt, tag } = await req.json();

  try {
    await connectToDB();

    const newPrompt = new Prompt({ creator: userID, tag, prompt });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create post", { status: 500 });
  }
};
