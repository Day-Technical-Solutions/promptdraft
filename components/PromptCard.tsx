/** @format */
"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Post } from "@app/create-prompt/page";

export default function PromptCard({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}: {
  key?: number;
  post: Post;
  handleTagClick?: (tag: string) => void;
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
}) {
  const [copied, setCopied] = useState("");
  const { data: session } = useSession();
  const router = useRouter();
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };
  const pathName = usePathname();
  const canvas = useRef();
  const handleProfileClick = (creatorId?: string) => {
    if (!creatorId || pathName === "/") return;
    if (session?.user.id === creatorId) return router.push("/profile");
    else return router.push(`/view/profile/?id=${creatorId}`);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className={
            "flex-1 flex justify-start items-center gap-3 p-2" +
            (pathName === "/feed" ? "cursor-pointer pulse-hover" : "")
          }
          onClick={() => handleProfileClick(post.creator?._id)}
        >
          <Image
            src={post.creator?.image ?? "/assets/images/logo.svg"}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshit font-semibold text-gray-900">
              {post.creator?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator?.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={() => handleCopy()}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt="icon"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className={
          "font-inter text-sm blue_gradient " +
          (pathName === "/feed" ? "cursor-pointer pulse-hover" : "")
        }
        onClick={() =>
          pathName !== "/" && handleTagClick && handleTagClick(post.tag)
        }
      >
        {post.tag}
      </p>

      {session?.user.id === post.creator?._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-3 border-t border-gray-200 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={() => handleEdit && handleEdit(post)}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={() => handleDelete && handleDelete(post)}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
}
