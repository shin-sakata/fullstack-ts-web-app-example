import NextAuth, { Session } from "next-auth"
import Providers from "next-auth/providers"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@app/prisma"

export default NextAuth({
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_API_KEY,
      clientSecret: process.env.TWITTER_SECRET_KEY,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async (session: Session, user) => {
      session.user.id = user.id
      return Promise.resolve(session)
    },
  },
})
