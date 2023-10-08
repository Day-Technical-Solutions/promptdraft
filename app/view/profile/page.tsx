/** @format */
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Profile from "@components/Profile";
import { Post } from "@app/create-prompt/page";

type Profile = {
  _id: string;
  username: string;
  email: string;
};

export default function UserProfile() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [user, setUser] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    const fetchUser = async () => {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
    fetchPost();
  }, []);

  return (
    user && (
      <Profile
        name={`${user?.username}'s`}
        desc="Have a look at the awesome creativity of these prompts!"
        data={posts}
      />
    )
  );
}
