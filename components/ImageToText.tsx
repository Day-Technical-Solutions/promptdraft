/** @format */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import ButtonSubmit from "./ButtonSubmit";
import { lorem } from "@utils/utils";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import Markdown from "react-markdown";

export default function ImageToText() {
  const [generated, setGenerated] = useState(lorem);
  const [submitting, setSubmitting] = useState(false);
  const { data: session } = useSession();
  const [upload, setUpload] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [displayedPrompt, setDisplayedPrompt] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/create/i2t", {
        method: "POST",
        body: JSON.stringify({ file: upload, preview }),
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

  const onDrop = useCallback((acceptedFiles: string | any[]) => {
    if (acceptedFiles?.length) {
      const file = acceptedFiles[0];
      if (
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif"
      )
        setUpload(file);
      else {
        alert("Must be .jpeg, .jpg, .png");
        return;
      }

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreview(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
    <section className="w-full flex-start flex-col min-h-screen mb-5">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Image-to-Text</span>
      </h1>
      <p className="desc">
        Spark your creativity by watching your inspirations materialize through
        our Image-to-Text converter. Discover powerful methods to create
        exceptional prompts, enriching the quality of your interactions, all
        inspired by the images that captivate you.{" "}
      </p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="mt-10 w-full flex flex-col glassmorphism"
      >
        <div {...getRootProps()} className="p-10 border-2 m-10 bg-slate-200">
          <div className="flex items-center justify-center m-10">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100 "
            >
              <input {...getInputProps()} />
              {preview && (
                <div className=" object-scale-down max-w-6xl">
                  <img
                    src={preview as string}
                    width="auto"
                    alt="uploaded image"
                  />
                </div>
              )}
              {!preview && (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>

                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <>
                      {" "}
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG or GIF
                      </p>
                    </>
                  )}
                </div>
              )}
            </label>
          </div>
        </div>

        <div className="m-5">
          <ButtonSubmit submitting={submitting} />
        </div>
        <div className="grid rounded-lg p-4 flex-col bg-white my-4">
          <div className="flex gap-4 w-full">
            <span className="font-bold text-2xl w-full">Your Prompt: </span>
            <div className="copy_btn" onClick={() => handleCopy(generated)}>
              <Image
                src={
                  copied === generated
                    ? "/assets/icons/tick.svg"
                    : "/assets/icons/copy.svg"
                }
                width={12}
                height={12}
                alt="icon"
              />
            </div>
          </div>
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_CDN_URL}/quotes.png`}
            width={50}
            height={50}
            alt="quotes"
            className="object-fill rounded-lg max-w-sm pointer-events-none rotate-180"
          />
          <Markdown className="p-2 font-satoshi text-xl mb-4 drop-shadow-lg text-gray-500">
            {displayedPrompt}
          </Markdown>
          <Image
            src={`${process.env.NEXT_PUBLIC_AWS_CDN_URL}/quotes.png`}
            width={50}
            height={50}
            alt="quotes"
            className="object-fill rounded-lg max-w-sm pointer-events-none justify-self-end"
          />
        </div>

        <div className="flex-start mx-3 mb-5 gap-4">
          {session?.user &&
            (generated === "" || generated === lorem ? (
              <button
                className="px-5 py-1.5 text-sm disabled:curser-default bg-white rounded-lg hover:text-white flex gap-2 flex-center hover:bg-blue-600 text-sky-500 transition-all disabled:bg-gray-500 disabled:text-gray-50"
                disabled={true}
              >
                Share
              </button>
            ) : (
              <Link
                href={{
                  pathname: "/share-prompt",
                  query: {
                    generatedPrompt: generated,
                  },
                }}
                className="px-5 py-1.5 text-sm disabled:curser-default bg-white rounded-lg hover:text-white flex gap-2 flex-center hover:bg-blue-600 text-sky-500 transition-all"
              >
                Share{" "}
              </Link>
            ))}
        </div>
      </form>
    </section>
  );
}
