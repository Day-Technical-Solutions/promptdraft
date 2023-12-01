/** @format */
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
import { Post } from "@app/create-prompt/page";

export default function MyProfile() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [favoritedPosts, setFavoritedPosts] = useState<Post[]>([]);
  const router = useRouter();
  const handleEdit = async (post: Post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post: Post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id}`, {
          method: "DELETE",
        });
        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!session?.user) return router.push("/");
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    const fetchFavorites = async () => {
      const response = await fetch(
        `/api/users/${session?.user.id}/posts/favorites`
      );
      const data = await response.json();
      setFavoritedPosts(data);
    };
    fetchFavorites();
    fetchPost();
  }, [session, router, session?.user.id]);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Explore and review any prompts you've shared or favorited."
      favPostsData={[...favoritedPosts]}
      postsData={[...posts]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}
