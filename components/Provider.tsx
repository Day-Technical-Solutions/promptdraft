/** @format */
"use client";

import React from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { Session } from "next-auth";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
