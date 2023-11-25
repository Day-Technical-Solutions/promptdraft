/** @format */
"use client";

import React, { useContext, useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import { T2CFormContext } from "@app/generate/text-to-chat/page";
import ActionType from "@utils/actions";
import DropdownSelect from "./DropdownSelect";
import Radio from "./Radio";

export default function TextToChat() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { formData, dispatch } = useContext(T2CFormContext)!;

  useEffect(() => {
    return console.log(formData);
  }, [formData]);

  return (
    <section className="w-full  flex-start flex-col min-h-screen mb-5">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Text-to-Chat</span>
      </h1>
      <p className="desc">
        Ignite your imagination and observe as your thoughts take shape with our
        Text-to-Chat prompt generator. Explore effective techniques for
        formulating top-notch prompts, elevating the quality of your
        interactions.{" "}
      </p>

      <form
        id="texttochat"
        onSubmit={(e) => handleSubmit(e)}
        className="mt-10 w-full flex flex-col glassmorphism"
      >
        <div className="input_container">
          <div className="font-bold text-lg py-2 my-5 font-inter border-b-2 border-gray-400 w-full">
            Base Response
          </div>
          <label htmlFor="thespian">
            <span className="font-satoshi font-semibold text-base text-gray-800 flex">
              Thespian <Tooltip info="Who should the AI act as?" />
            </span>
          </label>
          <input
            id="thespian"
            onChange={(e) => {
              dispatch({
                type: ActionType.UPDATE_THESPIAN,
                payload: e.target.value,
              });
            }}
            placeholder="Eg. 'An expert zoologist'"
            required
            name="thespian"
            className="form_input mb-5"
          ></input>
          <label htmlFor="context">
            <span className="font-satoshi font-semibold text-base text-gray-800 flex">
              Context{" "}
              <Tooltip info="What situtation caused you to begin this chat?" />
            </span>
          </label>
          <input
            id="context"
            onChange={(e) => {
              dispatch({
                type: ActionType.UPDATE_CONTEXT,
                payload: e.target.value,
              });
            }}
            placeholder="Eg. 'I'm a wildlife researcher and I need to information about an animal.'"
            required
            name="context"
            className="form_input mb-5"
          ></input>
          <label htmlFor="objective">
            <span className="font-satoshi font-semibold text-base text-gray-800 flex">
              Objective{" "}
              <Tooltip info="What do you want the AI to do? Try to keep the instructions simple." />
            </span>
          </label>
          <textarea
            id="objective"
            onChange={(e) => {
              dispatch({
                type: ActionType.UPDATE_OBJECTIVE,
                payload: e.target.value,
              });
            }}
            placeholder="Eg. 'Write a detailed outline of the zoology of a rhinocerous.'"
            required
            name="objective"
            className="form_input h-30 mb-5"
          ></textarea>
          <label htmlFor="example">
            <span className="font-satoshi font-semibold text-base text-gray-800 flex">
              Example{" "}
              <Tooltip info="Try to re-create a response as best as possible." />
            </span>
          </label>
          <textarea
            id="example"
            onChange={(e) => {
              dispatch({
                type: ActionType.UPDATE_EXAMPLE,
                payload: e.target.value,
              });
            }}
            placeholder={`Eg. "Start with a general overview, then 10 topic points with information for each, and finish with a closing summary."
            -Overview
              -Topic 1
              -Topic 2
              ...
              -Topic 10
            -Closing Summary`}
            name="example"
            className="form_input h-40 mb-5"
          ></textarea>
          <label htmlFor="callToAction">
            <span className="font-satoshi font-semibold text-base text-gray-800 flex">
              Call To Action{" "}
              <Tooltip info="What should the AI do after instruction?" />
            </span>
          </label>
          <input
            id="callToAction"
            onChange={(e) => {
              dispatch({
                type: ActionType.UPDATE_CTA,
                payload: e.target.value,
              });
            }}
            placeholder="Eg. Respond with any follow-up clarifying questions."
            name="callToAction"
            className="form_input mb-5"
          ></input>
          <DropdownSelect
            label="Scope"
            enumType="Scope"
            tooltip="Provide a spectrum from a broad understanding of a subject to more nuanced and detailed exploration."
            action={ActionType.UPDATE_SCOPE}
          />
          <DropdownSelect
            label="Primary Format"
            enumType="Format"
            tooltip="The primary structure that you want the response to have."
            action={ActionType.UPDATE_FORMAT}
            useOptionTooltips={false}
          />
          <div className="font-bold text-lg py-2 my-5 font-inter border-b-2 border-gray-400 w-full">
            Core Modifiers
          </div>
          <label htmlFor="constraints">
            <span className="font-satoshi font-semibold text-base text-gray-800 flex">
              Constraints{" "}
              <Tooltip info="What do you not want in the response? Consider this a 'Negative Prompt'." />
            </span>
          </label>
          <input
            id="constraints"
            onChange={(e) => {
              dispatch({
                type: ActionType.UPDATE_CONSTRAINTS,
                payload: e.target.value,
              });
            }}
            placeholder="Eg. Do not give me information about insects, such as the rhinocerous beetle.'"
            name="constraints"
            className="form_input mb-5"
          ></input>
          <DropdownSelect
            label="Language"
            enumType="Languages"
            tooltip="The language you want the response to be in."
            action={ActionType.UPDATE_LANGUAGE}
            useOptionTooltips={false}
          />
          <label htmlFor="keyterms">
            <span className="font-satoshi font-semibold text-base text-gray-800 flex">
              Key Terms{" "}
              <Tooltip info="What keywords MUST be in the response?" />
            </span>
          </label>
          <input
            id="keyterms"
            onChange={(e) => {
              dispatch({
                type: ActionType.UPDATE_KEYTERMS,
                payload: e.target.value,
              });
            }}
            placeholder="Eg. durability, ivory, keratin, kilograms, life cycle'"
            name="keyterms"
            className="form_input mb-5"
          ></input>
          <DropdownSelect
            label="Tone"
            enumType="Tone"
            tooltip="The tone you want the response to be in."
            action={ActionType.UPDATE_TONE}
          />
          <DropdownSelect
            label="Urgency"
            enumType="Urgency"
            tooltip="How urgent should the response feel?"
            action={ActionType.UPDATE_URGENCY}
          />
          <label htmlFor="audience">
            <span className="font-satoshi font-semibold text-base text-gray-800 flex">
              Audience{" "}
              <Tooltip info="Who is the target audience for the response?" />
            </span>
          </label>
          <input
            id="audience"
            onChange={(e) => {
              dispatch({
                type: ActionType.UPDATE_AUDIENCE,
                payload: e.target.value,
              });
            }}
            placeholder="Eg. Wildlife researcher'"
            name="audience"
            className="form_input mb-5"
          ></input>
          <DropdownSelect
            label="Sensitivity"
            enumType="Sensitivity"
            tooltip="How sensitive to the topic should the response be?"
            action={ActionType.UPDATE_SENSITIVITY}
          />
          <label htmlFor="pov">
            <span className="font-satoshi font-semibold text-base text-gray-800 flex">
              Point of View{" "}
              <Tooltip info="Is there a specific point of view you want the response to cater to?" />
            </span>
          </label>
          <input
            id="pov"
            onChange={(e) => {
              dispatch({
                type: ActionType.UPDATE_POV,
                payload: e.target.value,
              });
            }}
            placeholder="Eg. National Geographic narrator'"
            name="pov"
            className="form_input mb-5"
          ></input>
        </div>
        <div className="font-bold text-lg py-2 my-5 font-inter border-b-2 border-gray-400 w-full">
          Data Modifiers
        </div>
        <Radio
          form="texttochat"
          name="visualElements"
          tooltip="Use visual elements for data in the response? Eg. (Bar, Float, Pie charts, line graphs) These will be textual representations unless using advanced data analysis."
          label="Visual Elements"
          action={ActionType.UPDATE_VISUAL_ELEMENTS}
        />
        <Radio
          form="texttochat"
          name="counterArguments"
          tooltip="Provide counter arguments in the response?"
          label="Counter Arguments"
          action={ActionType.UPDATE_COUNTERARGUMENTS}
        />
        <Radio
          form="texttochat"
          name="analogies"
          tooltip="Use supporting analogies for explanations?"
          label="Analogies"
          action={ActionType.UPDATE_ANALOGIES}
        />
        <Radio
          form="texttochat"
          name="statistics"
          tooltip="Include statistics to support arguments?"
          label="Statistics"
          action={ActionType.UPDATE_STATISTICS}
        />
        <Radio
          form="texttochat"
          name="quotes"
          tooltip="Include relevant quotes from qualified professionals?"
          label="Quotes"
          action={ActionType.UPDATE_QUOTES}
        />
        <Radio
          form="texttochat"
          name="citations"
          tooltip="Include citations for all quotes and statistics used."
          label="Citations"
          action={ActionType.UPDATE_CITATIONS}
        />
      </form>
    </section>
  );
}
