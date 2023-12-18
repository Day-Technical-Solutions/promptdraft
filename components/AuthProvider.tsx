/** @format */
"use client";

import React, { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Session, getServerSession } from "next-auth";

export default async function AuthProvider({ children }: { children: React.ReactNode }) {
	return <SessionProvider>{children}</SessionProvider>;
}
