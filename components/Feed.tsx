/** @format */
"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import PromptCard from "./PromptCard";
import { Post } from "@app/create-prompt/page";

const PromptCardList = ({
  data,
  handleTagClick,
}: {
  data: Post[];
  handleTagClick: (tag: string) => void;
}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post, index) => (
        <PromptCard key={index} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

export default function Feed() {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSearchText(tag);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPost();
  }, []);

  useEffect(() => {
    //filter by tag, post, username
    const filtered = posts.filter((post) => {
      return (
        post.creator?.email.toLowerCase().includes(searchText.toLowerCase()) ||
        post.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredPosts(filtered);
  }, [searchText]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a user"
          value={searchText}
          onChange={(e) => handleSearchChange(e)}
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={searchText.length ? filteredPosts : posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
}
