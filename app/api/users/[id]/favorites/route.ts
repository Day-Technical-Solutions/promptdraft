/** @format */

import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import User from "@models/user";
// api/users/[id]/favorites route
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
    return new Response(JSON.stringify(user.favorites), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get user favorites", { status: 500 });
  }
};

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
    const { favorites } = await req.json();
    const existingUser = await User.findOne({ _id: params.id });
    existingUser.favorites = favorites;
    existingUser.save();
    return new Response(JSON.stringify(existingUser), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get update favorites", { status: 500 });
  }
};
