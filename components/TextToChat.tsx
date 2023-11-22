/** @format */
"use client";

import React, { useContext, useState } from "react";
import Tooltip from "./Tooltip";
import { T2CFormContext, T2CFormData } from "@app/generate/text-to-chat/page";
import ActionType from "@utils/actions";
import DropdownSelect from "./DropdownSelect";

export default function TextToChat() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { dispatch } = useContext(T2CFormContext)!;

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
            placeholder={`Eg. Start with a general overview, then 10 topic points with information for each, and finish with a closing summary.
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
        </div>
      </form>
    </section>
  );
}
