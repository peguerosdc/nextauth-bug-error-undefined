import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from "@auth/prisma-adapter"
 
const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      from: "dummy@domain.com",
      sendVerificationRequest: async (params) => {
        throw new Error("Error");
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
  },
})
