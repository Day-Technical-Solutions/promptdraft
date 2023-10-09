/** @format */

import React from "react";
import { type Post } from "@app/create-prompt/page";
import Link from "next/link";

export default function Form({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}: {
  type: string;
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  submitting: boolean;
  handleSubmit: any;
}) {
  return (
    <section className="w-full max-w-full flex-start flex-col h-screen">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post </span>
      </h1>
      <p className="desc text-left max-w-md">
        {" "}
        {type} and share amazing prompts with the world and let your imagination
        run wild with any AI-powered platform. Any prompts you share will be
        saved to your profile.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-800">
            Your AI Prompt
          </span>
        </label>
        <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Write your prompt here..."
          required
          className="form_textarea"
        ></textarea>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-800">
            Tags <span className="font-normal">(#prompt, #ai, #tool)</span>
          </span>
        </label>

        <input
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder="#tags"
          required
          className="form_input"
        ></input>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm black_btn"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}
