/** @format */
import React from "react";
import PromptCard from "./PromptCard";
import { Post } from "@app/create-prompt/page";

export default function Profile({
  name,
  desc,
  favPostsData,
  postsData,
  handleEdit,
  handleDelete,
}: {
  name: string;
  desc: string;
  favPostsData: Post[];
  postsData: Post[];
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
}) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout min-h-screen">
        {favPostsData.map((post, index) => (
          <PromptCard
            favorite={true}
            key={index}
            post={post}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
        {postsData.map((post, index) => (
          <PromptCard
            favorite={false}
            key={index}
            post={post}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}
