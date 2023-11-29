/** @format */

import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const feedDemoIds: string[] = [
      "6566fcceb411cb162460e7de",
      "65671382a7134a323f06c4e4",
      "65671695a7134a323f06c510",
    ];
    const prompts = await Prompt.find({
      _id: { $in: feedDemoIds },
    }).populate("creator");

    if (!prompts || !prompts.length)
      return new Response("Prompts not found", { status: 404 });
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get post", { status: 500 });
  }
};
