/** @format */

/** @format */
"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import { Post } from "@app/create-prompt/page";

export default function SharePrompt() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Post>({
    prompt: searchParams.get("generatedPrompt") ?? "",
    tag: "",
  });
  if (!session?.user.id) return router.push("/");

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
        }),
      });
      if (response.ok) router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Share"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
}
