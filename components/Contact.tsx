/** @format */
"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const form = useRef(null);

  return (
    <div className="background_blue_gradient text-center flex p-12 mt-10 ">
      <section className="w-full max-w-full flex-col flex-center mx-10">
        <h1 className="head_text text-center">
          <span className="text-white font-satoshi">Contact Us</span>
        </h1>
        <p className="p-5 mt-5 text-lg w-50 sm:text-xl max-w-2xl; text-white">
          Facing a technical hiccup? Have thoughts for a new feature? Curious
          about future plans or details? Reach out and keep the conversation
          going!
        </p>

        <form
          ref={form}
          onSubmit={async (e) => {
            e.preventDefault();
            setSubmitting(true);
            try {
              await emailjs
                .sendForm(
                  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                  form.current!,
                  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                )
                .then((result) => alert("Email successfully sent!"));
            } catch (error) {
              console.log(error);
            }

            setSubmitting(false);
          }}
          className="mt-10 w-full max-w-lg md:max-w-4xl text-left flex flex-col gap-1 glassmorphism"
        >
          <label htmlFor="email">
            <span className="font-satoshi font-semibold text-base text-white">
              Email
            </span>
          </label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            required
            className="form_input"
            autoComplete="email"
          ></input>
          <label htmlFor="subject">
            <span className="font-satoshi font-semibold text-base text-white">
              Subject
            </span>
          </label>

          <input
            onChange={(e) => setSubject(e.target.value)}
            name="subject"
            id="subject"
            placeholder="Subject"
            type="subject"
            required
            className="form_input"
          ></input>
          <label htmlFor="message">
            <span className="font-satoshi font-semibold text-base text-white">
              Message
            </span>
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            placeholder="Let us know how we can help..."
            required
            className="form_textarea"
          ></textarea>

          <div className="flex-end mx-3 mb-5 mt-5">
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm black_btn_reversed"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
