/** @format */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";

export default function Nav() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();
  const siteName = "Prompt Draft";

  useEffect(() => {
    const setLoginProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setLoginProviders();
  }, []);

  useEffect(() => {
    if (!session) return;
    const updateImage = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/image`, {
        method: "PATCH",
        body: JSON.stringify(session?.user.image),
      });
    };
    updateImage();
  }, [session?.user.image]);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <div className=" rounded-full bg-blue-300">
          <Image
            width={30}
            height={30}
            alt="logo"
            src="/assets/images/clipboard.png"
            className="object-contain"
          />
        </div>
        <p className="font-satoshi font-bold text-lg">{siteName}</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/generate" className="black_btn">
            Generate
          </Link>
          <Link href="/feed" className="black_btn">
            Feed
          </Link>
          {session?.user && (
            <>
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>

              <button
                type="button"
                onClick={() => {
                  signOut();
                  router.push("/");
                }}
                className="outline_btn"
              >
                Sign Out
              </button>
              <Link href={"/profile"}>
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        {session?.user && (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div
                className="dropdown"
                onMouseLeave={() => setToggleDropdown((prev) => !prev)}
              >
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/generate"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Generate
                </Link>
                <Link
                  href={"/create-prompt"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Post
                </Link>
                <Link
                  href={"/feed"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Feed
                </Link>
                <button
                  className="mt-5 w-full black_btn"
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {!session?.user && (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={async () => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            ))}
        </>
      )}
    </nav>
  );
}
