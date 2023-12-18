/** @format */

import { connectToDB } from "@utils/database";
import bcrypt from "bcrypt";
import { getServerSession, type AuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { encode, decode } from "next-auth/jwt";
import User, { IUser } from "@models/user";

export const authOptions: AuthOptions = {
	session: {
		strategy: "jwt",
	},
	jwt: { encode, decode },
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username:",
					type: "text",
					placeholder: "your-username-here",
				},
				email: {
					label: "Email:",
					type: "email",
					placeholder: "email@example.com",
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "*********",
				},
			},
			async authorize(credentials) {
				if (!credentials) return null;
				await connectToDB();
				const user: IUser | null = await User.findOne({
					email: credentials.email,
				});
				if (!user) {
					const usernameInfo = credentials.username as string;
					const passwordInfo = bcrypt.hashSync(credentials.password as string, 4);
					await User.create({
						email: credentials.email,
						username: usernameInfo.replace(/\s/g, "").toLowerCase(),
						image: "",
						userTag: usernameInfo.replace(/\s/g, "") + Math.floor(Math.random() * 1000),
						password: passwordInfo,
						favorites: [],
					});

					const newUser = await User.findOne({
						email: credentials.email,
					});

					return {
						id: newUser._id,
						email: newUser.email,
						name: newUser.username,
						image: newUser.image,
					};
				} else {
					const isAutorized = await bcrypt.compare(credentials.password, user.password!);
					if (isAutorized) {
						return {
							id: user._id,
							email: user.email,
							name: user.username,
							image: user.image,
						};
					}
				}
				return null;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		}),
	],
	callbacks: {
		async signIn({ profile, user, credentials }) {
			try {
				await connectToDB();
				if (user && credentials) {
					return true;
				}

				if (profile) {
					//check db to see if user exists, or create one.
					const userExists = await User.findOne({
						email: profile.email,
					});

					if (!userExists) {
						const userTag = profile!.name
							? profile!.name.replace(/\s/g, "") + Math.floor(Math.random() * 1000)
							: "guest" + Math.floor(Math.random() * 1000);
						await User.create({
							email: profile!.email,
							username: profile!.name!.replace(/\s/g, "").toLowerCase(),
							image: profile!.image ?? "",
							userTag: userTag,
							password: null,
							favorites: [],
						});
					}
					return true;
				}
				return false;
			} catch (error) {
				console.log(error);
				return false;
			}
		},
		async session({ session, token }) {
			if (session.user.id) return session;
			const newSession = await getServerSession();
			const user = await User.findOne({ email: newSession?.user.email ?? session.user.email });
			session.user.id = user._id;
			session.user.favorites = user.favorites;
			return session;
		},
	},
};
