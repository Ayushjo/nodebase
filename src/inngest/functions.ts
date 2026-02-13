import prisma from "@/lib/db";
import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
const google = createGoogleGenerativeAI();
export const execute = inngest.createFunction(
  { id: "execute" },
  { event: "execute-ai" },
  async ({ event, step }) => {
    const { steps } = await step.ai.wrap("gemini-generate-text", generateText, {
      model: google("gemini-2.5-flash"),
      prompt: "Write a vegetarian lasagna recipe for 4 people.",
      system: "You are a chef at a 5 star restaurant",
    });

    return steps;
  },
);
