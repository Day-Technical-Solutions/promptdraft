/** @format */
"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import { useSession } from "next-auth/react";
import Tooltip from "./Tooltip";
import { Image } from "next/dist/client/image-component";
import Accordion from "./Accordion";
import { T2IFormContext } from "@app/generate/text-to-image/page";
import ActionType from "@utils/actions";
import Link from "next/link";
import { lorem } from "@utils/utils";
import ButtonSubmit from "./ButtonSubmit";

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
  }, [generated, displayedPrompt.length]);

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
        <div className="mb-5">
          <Accordion
            collection={formData.photoArtStyle}
            label="Photo/Art Style"
            tooltip={
              <Tooltip
                info={
                  "What kind of art style or composition should this image have?"
                }
              />
            }
            enumType={"PhotoArtStyle"}
          />
          <Accordion
            collection={formData.realism}
            label="Realism"
            tooltip={<Tooltip info={"How realistic should the image be?"} />}
            enumType={"Realism"}
            useRadio={true}
          />
          <Accordion
            collection={formData.artMedium}
            label="Art Medium"
            tooltip={
              <Tooltip
                info={"What kind of material should be used to make the image?"}
              />
            }
            enumType={"ArtMedium"}
          />
          <Accordion
            collection={formData.timeOfDay}
            label="Time Of Day"
            tooltip={
              <Tooltip
                info={
                  "What time of the day should it be roughly? Typically affects environment."
                }
              />
            }
            enumType={"TimeOfDay"}
          />
          <Accordion
            collection={formData.lighting}
            label="Lighting"
            tooltip={
              <Tooltip
                info={"What kind of lighting should the subject have?"}
              />
            }
            enumType={"Lighting"}
          />
          <Accordion
            collection={formData.colorScheme}
            label="Color Scheme"
            tooltip={
              <Tooltip info={"What type of colors should the image have?"} />
            }
            enumType={"ColorScheme"}
          />
          <Accordion
            collection={formData.mood}
            label="Mood"
            tooltip={
              <Tooltip
                info={
                  "What kind of mood is the subject in? Typically affects faces."
                }
              />
            }
            enumType={"Mood"}
          />
          <Accordion
            collection={formData.influence}
            label="Influence"
            tooltip={
              <Tooltip
                info={
                  "Add influence of art styles from various well known artists."
                }
              />
            }
            enumType={"Influence"}
          />
          <Accordion
            collection={formData.camera}
            label="Camera"
            tooltip={
              <Tooltip
                info={
                  "What kind of camera/settings should the image be made with? May give inconsistent results based on model."
                }
              />
            }
            enumType={"Camera"}
          />
          <Accordion
            collection={formData.magicWords}
            label="Magic Words"
            tooltip={
              <Tooltip info={"Add various keywords to help improve quality."} />
            }
            enumType={"MagicWords"}
          />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="grid rounded-lg p-4 flex-col bg-white">
            <div className="flex gap-4 w-full">
              <span className=" font-bold text-2xl w-full">Your Prompt: </span>
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
            <p className="p-2 desc mb-4 drop-shadow-lg">{displayedPrompt}</p>
            <Image
              src={`${process.env.NEXT_PUBLIC_AWS_CDN_URL}/quotes.png`}
              width={50}
              height={50}
              alt="quotes"
              className="object-fill rounded-lg max-w-sm pointer-events-none justify-self-end"
            />
          </div>
          <div className="rounded-lg p-4 flex bg-white flex-col">
            <div className="flex gap-4 w-full">
              <div className="flex w-full">
                <span className=" font-bold text-2xl">Negative Prompt </span>
                {
                  <Tooltip info="A negative prompt is an attempt to exclude specific things from the generated image." />
                }
              </div>
              <div
                className="copy_btn z-10 "
                onClick={() => handleCopy(negPrompt)}
              >
                <Image
                  src={
                    copied === negPrompt
                      ? "/assets/icons/tick.svg"
                      : "/assets/icons/copy.svg"
                  }
                  width={12}
                  height={12}
                  alt="icon"
                />
              </div>
            </div>
            <div className="w-full gap-2 p-2">
              <p className="desc mb-2">Sample:</p>
              <p className=" italic">{negPrompt}</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex-start mx-3 mb-5 gap-4">
          <ButtonSubmit submitting={submitting} />
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
