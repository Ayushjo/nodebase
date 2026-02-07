import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import prisma from "./db";


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword:{
    enabled:true,
    autoSignIn:true // by turning this if someone signs in he doesnt have to login at that time he is automatically logged in
  }
});
