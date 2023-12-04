/** @format */

import NextAuth from "next-auth";

import { authOptions } from "@utils/AuthOptions";
// api/auth/next-auth/[provider] route

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
