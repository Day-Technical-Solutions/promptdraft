/** @format */
// api/prompt/create/t2c route
import { Utils } from "@utils/utils";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: "org-KPf7OJsVT5kRsafTmRQ1bC5N",
});

export const POST = async (req: Request) => {
  const { file, preview } = await req.json();
  const completion = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Describe this image as if it was a high quality prompt for AI image generation. Ensure the response can be used to generate an image. Avoid using quotations. Be as detailed and descriptive as possible. Use this prompt as an example to structure the response: 'a baby laying in a stroller, urban sidewalk, red shirt, green stroller, smiling, portrait, urban, street photography, realistic, lifelike, photography, afternoon, natural lighting, vibrant colors, playful mood, best quality, exquisite, high resolution, highly detailed, stunning'",
          },
          {
            type: "image_url",
            image_url: {
              url: preview,
              detail: "auto",
            },
          },
        ],
      },
    ],
    max_tokens: 300,
  });

  const generatedPrompt = completion.choices[0].message.content;
  try {
    return new Response(JSON.stringify(generatedPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate prompt", { status: 500 });
  }
};
