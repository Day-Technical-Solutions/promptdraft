/** @format */

import { connectToDB } from "@utils/database";
import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { encode, decode } from "next-auth/jwt";
import User from "@models/user";
// api/auth/next-auth/[provider] route
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: { encode, decode },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      session = (await getServerSession())!;

      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile!.email });

        if (!userExists) {
          const userTag = profile!.name
            ? profile!.name.replace(/\s/g, "") +
              Math.floor(Math.random() * 1000)
            : "guest" + Math.floor(Math.random() * 1000);
          await User.create({
            email: profile!.email,
            username: profile!.name!.replace(/\s/g, "").toLowerCase(),
            image: profile!.image ?? "",
            userTag: userTag,
            favorites: [],
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
