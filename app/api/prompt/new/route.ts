/** @format */
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
// api/prompt/new route
type Request = {
  json: () =>
    | PromiseLike<{
        userID: string;
        prompt: string;
        tag: string;
        link: string;
        title: string;
      }>
    | {
        userID: string;
        prompt: string;
        tag: string;
        link: string;
        title: string;
      };
};
export const POST = async (req: Request) => {
  const { userID, prompt, tag, title, link } = await req.json();

  try {
    await connectToDB();

    const newPrompt = new Prompt({ creator: userID, tag, prompt, title, link });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create post", { status: 500 });
  }
};
