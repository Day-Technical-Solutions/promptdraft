/** @format */

import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const feedDemoIds: string[] = [];
    const prompts = feedDemoIds.map(async (id) => {
      return await Prompt.findById(id).populate("creator");
    });

    if (!prompts || !prompts.length)
      return new Response("Prompts not found", { status: 404 });
    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get post", { status: 500 });
  }
};
