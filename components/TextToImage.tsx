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
      >
        <div className="gap-5 grid items-center grid-cols-1 md:grid-cols-2 max-w-5xl pb-1">
          <div className="input_container">
            <div className="font-bold text-lg py-2 my-5 font-inter border-b-2 border-gray-400 w-full">
              Details
            </div>
            <label htmlFor="subject">
              <span className="font-satoshi font-semibold text-base text-gray-800 flex">
                Subject{" "}
                <Tooltip info="What is the primary focus of your prompt?" />
              </span>
            </label>
            <input
              id="subject"
              onChange={(e) => {
                dispatch({
                  type: ActionType.UPDATE_SUBJECT,
                  payload: e.target.value,
                });
              }}
              placeholder="Eg. 'a baby'"
              required
              name="subject"
              className="form_input mb-5"
            ></input>
            <label htmlFor="predicate">
              <span className="font-satoshi font-semibold text-base text-gray-800 flex">
                Predicate
                <Tooltip info="What is the subject doing?" />
              </span>
            </label>
            <input
              id="predicate"
              name="predicate"
              onChange={(e) => {
                dispatch({
                  type: ActionType.UPDATE_PREDICATE,
                  payload: e.target.value,
                });
              }}
              placeholder="Eg. 'in a stroller'"
              className="form_input mb-5"
            ></input>
            <label htmlFor="environment">
              <span className="font-satoshi font-semibold text-base text-gray-800 flex">
                Environment
                <Tooltip info="What kind of enviroment is the subject in?" />
              </span>
            </label>
            <input
              id="environment"
              name="environment"
              onChange={(e) => {
                dispatch({
                  type: ActionType.UPDATE_ENV,
                  payload: e.target.value,
                });
              }}
              placeholder="Eg. 'urban sidewalk'"
              className="form_input mb-5"
            ></input>
          </div>
          <div className="flex flex-col flex-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_AWS_CDN_URL}/sample_image_prompt.jpg`}
              width={1024}
              height={1024}
              alt="generator"
              className="object-fill rounded-lg max-w-sm pointer-events-none noselect"
              priority
            />
            <p className=" italic p-1 w-4/5 text-center">
              {`"a baby laying in a stroller, urban sidewalk, red shirt, green
              stroller, smiling, portrait, urban, street photography, realistic,
              lifelike, photography, afternoon, natural lighting, vibrant
              colors, playful mood, best quality, exquisite, high resolution,
              highly detailed, stunning"`}
            </p>
          </div>
        </div>
        <label htmlFor="extra_details">
          <span className="font-satoshi font-semibold text-base text-gray-800 flex">
            Extra Details
            <Tooltip info="What other details about the subject do you want to push to priority for the model?" />
          </span>
        </label>
        <textarea
          id="extra_details"
          name="extra_details"
          onChange={(e) => {
            dispatch({
              type: ActionType.UPDATE_EXTRA_DETAILS,
              payload: e.target.value,
            });
          }}
          placeholder="Eg. red shirt, green stroller, smiling"
          className="form_textarea mb-5 border-none"
        ></textarea>
        <div className="font-bold text-lg py-2 my-5 font-inter border-b-2 border-gray-400 w-full">
          Modifiers
        </div>
      </form>
    </section>
  );
}
