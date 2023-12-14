/** @format */
"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import PromptCard from "./PromptCard";
import { Post } from "@app/create-prompt/page";
import { useRouter } from "next/navigation";

const PromptCardList = ({
	data,
	handleTagClick,
}: {
	data: Post[];
	handleTagClick: (tag: string) => void;
}) => {
	return (
		<div className='mt-16 prompt_layout'>
			{data.map((post, index) => (
				<PromptCard key={index} post={post} handleTagClick={handleTagClick} />
			))}
		</div>
	);
};

export default function FeedDemo() {
	const [posts, setPosts] = useState<Post[]>([]);
	const router = useRouter();

	useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch("/api/prompt/demo");
			const data = await response.json();
			setPosts(data);
		};
		fetchPost();
	}, []);

	return (
		<section className='feed'>
			<h3 className='head_text text-center blue_gradient'>Share Your Prompts</h3>
			<PromptCardList data={posts} handleTagClick={() => {}} />
			<button
				onClick={() => router.push("/feed")}
				className='group relative h-12 w-48 overflow-hidden rounded-md  bg-blue-400 text-lg shadow hover:scale-110 transition-all duration-[250ms] ease-in-out'
			>
				<div className='absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full '></div>
				<span className='relative text-white group-hover:text-blue-400'>See More</span>
			</button>
		</section>
	);
}
