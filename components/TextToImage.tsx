/** @format */
"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import { useSession } from "next-auth/react";
import { T2IFormContext, lorem } from "@utils/utils";
import ActionType from "@utils/actions";
import Link from "next/link";
import Accordion from "./Accordion";
import ButtonSubmit from "./ButtonSubmit";
import Tooltip from "./Tooltip";
import Image from "next/image";

export default function TextToImage() {
  const [submitting, setSubmitting] = useState(false);
  const [generated, setGenerated] = useState(lorem);
  const [negPrompt, setNegPrompt] = useState(
    "disfigured, bad art, bad anatomy, bad proportions, cloned face, ugly, extra limbs, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, mutated hands, fused fingers, too many fingers, long neck, mutant"
  );
  const [displayedPrompt, setDisplayedPrompt] = useState("");
  const { data: session } = useSession();
  const { formData, dispatch } = useContext(T2IFormContext)!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/create/t2i", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        setGenerated(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const [copied, setCopied] = useState("");
  const handleCopy = (text: string) => {
    setCopied(text);
    navigator.clipboard.writeText(text);
    setTimeout(() => setCopied(""), 3000);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (generated.length !== displayedPrompt.length) {
        setDisplayedPrompt(generated.slice(0, index));
        index++;
      }
    }, 0);

    return () => clearInterval(interval);
  }, [generated]);

  return (
    <section className="w-full  flex-start flex-col min-h-screen mb-5">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Text-to-Image</span>
      </h1>
      <p className="desc">
        Unleash your creativity and watch your words come to life with our
        Text-to-Image Generator. Learn how to quickly create high quality
        prompts to reduce iteration.{" "}
      </p>

      <form
        id="texttoimage"
        onSubmit={(e) => handleSubmit(e)}
        className="mt-10 w-full flex flex-col glassmorphism"
      ></form>
    </section>
  );
}
