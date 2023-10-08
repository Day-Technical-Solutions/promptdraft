/** @format */

import { connectToDB } from "@utils/database";
import User from "@models/user";
import Prompt from "@models/prompt";
// api/users/[id] route
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

    const user = await User.findOne({
      _id: params.id,
    });
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get user Info", { status: 500 });
  }
};
