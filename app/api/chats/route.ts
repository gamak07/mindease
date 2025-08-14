// app/api/chats/route.ts
import { NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const SYSTEM_PROMPT = `You are MindEase — a kind, supportive mental health companion for university students.
Always respond with empathy, warmth, and short, actionable suggestions.
- Do NOT give medical diagnoses or prescribe medication.
- If the user mentions self-harm, suicide, or crisis, first say:
  "I'm really sorry you're feeling this way. If you're in immediate danger or thinking of harming yourself, please contact local emergency services or a crisis hotline right now."
  Then encourage them to reach out to a trusted person or professional.
Keep replies concise and non-judgmental.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const message: string | undefined = body?.message;

    if (!message?.trim()) {
      return new Response(JSON.stringify({ error: "No message provided." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Build the request — pass a system instruction and the user message.
    const resp = await ai.models.generateContent({
      model: MODEL,
      contents: [
        // You can pass system instructions like this:
        { role: "model", parts: [{ text: SYSTEM_PROMPT }] }, // treated as system-like instruction
        { role: "user", parts: [{ text: message }] },
      ],
      // Optional: tune safety output filters. Defaults are fine for most cases.
      // config: {
      //   safetySettings: [
      //     { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      //     { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      //     { category: "HARM_CATEGORY_SEXUAL_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      //     { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      //   ],
      // },
    });

    const text = resp.text ?? "";
    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    // Gemini error payloads include rate-limit & quota info
    return new Response(JSON.stringify({ error: err?.message || "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
