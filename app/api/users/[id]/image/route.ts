/** @format */

import { connectToDB } from "@utils/database";
import User from "@models/user";
import Prompt from "@models/prompt";
// api/users/[id] route
export const PATCH = async (
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
    const image = await req.json();
    const user = await User.findOne({
      _id: params.id,
    });
    user.image = image;
    user.save();
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to update image", { status: 500 });
  }
};
