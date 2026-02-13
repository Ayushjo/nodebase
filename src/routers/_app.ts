import { z } from "zod";
import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import prisma from "@/lib/db";
import { inngest } from "@/inngest/client";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany({});
  }),
  createWorkflows: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute-ai",
      data: {
        email: "ayush",
      },
    });
    return { success: true, message: "job queued" };
  }),
  testAi: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute-ai",
    });
    return { success: true, message: "job queued" };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
