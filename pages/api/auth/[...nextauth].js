import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  jwt: {
    signinKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  database: process.env.DATABASE_URL,
  adapter: PrismaAdapter(prisma),
});
