/** @format */

import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";

// api/users/[id]/posts/favorites route
export const GET = async (
  req: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    await connectToDB();
    const user = await User.findOne({ _id: params.id });
    const favArray = user.favorites.slice();
    const favoritedPrompts = await Prompt.find({
      _id: { $in: favArray },
    }).populate("creator");

    return new Response(JSON.stringify(favoritedPrompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get user favorites", { status: 500 });
  }
};
