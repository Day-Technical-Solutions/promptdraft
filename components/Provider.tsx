/** @format */
"use client";

import React, { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@utils/AuthOptions";

export default async function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider session={session ?? null}>{children}</SessionProvider>
  );
}
