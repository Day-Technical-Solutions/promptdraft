/** @format */
"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

export type Post = {
  _id?: string;
  creator?: {
    _id: string;
    email: string;
    username: string;
    image: string;
    userTag: string;
    favorites: string[];
  };
  title: string;
  link: string;
  prompt: string;
  tag: string;
};

export default function CreatePrompt() {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [post, setPost] = useState<Post>({
    prompt: "",
    tag: "",
    link: "",
    title: "",
  });

  useEffect(() => {
    if (!session?.user.id) return router.push("/");
    if (completed) router.push("/profile");
  }, [session?.user.id, router, completed]);

  const createPrompt = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userID: session?.user.id,
          tag: post.tag,
          link: post.link,
          title: post.title,
        }),
      });
      if (response.ok) setCompleted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
}
