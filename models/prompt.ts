/** @format */

import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
  date: { type: Date, default: Date.now },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
