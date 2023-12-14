/** @format */
// api/prompt/create/t2c route
import { T2CFormData } from "@data/Contexts";
import { Utils } from "@utils/utils";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
	organization: "org-KPf7OJsVT5kRsafTmRQ1bC5N",
});

export const POST = async (req: Request) => {
	const formData: T2CFormData = await req.json();
	const gptPrompt = Utils.buildPromptTextToChat();
	const completion = await openai.chat.completions.create({
		messages: [
			{ role: "system", content: gptPrompt },
			{ role: "user", content: JSON.stringify(formData) },
		],
		model: "gpt-4",
	});
	const generatedPrompt = completion.choices[0].message.content;

	try {
		return new Response(JSON.stringify(generatedPrompt), { status: 201 });
	} catch (error) {
		return new Response("Failed to generate prompt", { status: 500 });
	}
};
