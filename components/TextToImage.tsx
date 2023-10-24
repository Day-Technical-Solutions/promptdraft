/** @format */
"use client";
import React from "react";
import { useState } from "react";
import Tooltip from "./Tooltip";
import { Image } from "next/dist/client/image-component";

type FormData = {
  subject: string;
  predicate: string;
  environment: string;
  extraDetails: string;
  photoArtStyle: Set<string>;
  realism: Set<string>;
  artMedium: Set<string>;
  timeOfDay: Set<string>;
  lighting: Set<string>;
  colorScheme: Set<string>;
  mood: Set<string>;
  influece: Set<string>;
  config: Set<string>;
  magicWords: Set<string>;
};

export default function TextToImage() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    predicate: "",
    environment: "",
    extraDetails: "",
    photoArtStyle: new Set(),
    realism: new Set(),
    artMedium: new Set(),
    timeOfDay: new Set(),
    lighting: new Set(),
    colorScheme: new Set(),
    mood: new Set(),
    influece: new Set(),
    config: new Set(),
    magicWords: new Set(),
  });

  const handleSubmit = (e: { preventDefault: any }) => {
    e.preventDefault();
    setSubmitting(true);
    const delay = setTimeout(() => {
      setSubmitting(false);
    }, 2000);

    return () => clearTimeout(delay);
  };

  return (
    <section className="w-full max-w-full flex-start flex-col h-screen">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Text-to-Image</span>
      </h1>
      <p className="desc">
        Unleash your creativity and watch your words come to life with our
        Text-to-Image Generator. Learn how to quickly create high quality
        prompts to reduce iteration.{" "}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full flex flex-col glassmorphism"
      >
        <div className="gap-5 grid items-center grid-cols-1 md:grid-cols-2 max-w-5xl pb-1">
          <div className="input_container">
            <label htmlFor="subject">
              <span className="font-satoshi font-semibold text-base text-gray-800 flex">
                Subject{" "}
                <Tooltip info="What is the primary focus of your prompt?" />
              </span>
            </label>
            <input
              id="subject"
              onChange={(e) => {
                setFormData({ ...formData, subject: `${e.target.value}` });
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
                setFormData({ ...formData, predicate: `${e.target.value}` });
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
                setFormData({ ...formData, environment: `${e.target.value}` });
              }}
              placeholder="Eg. 'urban sidewalk'"
              className="form_input mb-5"
            ></input>
          </div>
          <div className="flex flex-col flex-center">
            <Image
              src="/assets/images/placeholder.png"
              width={300}
              height={300}
              alt="generator"
              className="object-fill rounded-lg"
              priority
            />
            <p className=" italic p-1"> text describing image above</p>
          </div>
        </div>
        <label htmlFor="extra_details">
          <span className="font-satoshi font-semibold text-base text-gray-800 flex">
            Extra Details
            <Tooltip info="What other details about the subject do you want to push priority for the model?" />
          </span>
        </label>
        <textarea
          id="extra_details"
          name="extra_details"
          onChange={(e) => {
            setFormData({ ...formData, extraDetails: `${e.target.value}` });
          }}
          placeholder="Eg. red shirt, green stroller, smiling"
          className="form_textarea mb-5 border-none"
        ></textarea>

        <div className="flex-start mx-3 mb-5 gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-blue-600 rounded-lg text-white flex gap-2 flex-center hover:bg-white hover:text-sky-500 transition-all"
          >
            {submitting ? `Generating...` : "Generate"}
            {submitting && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
