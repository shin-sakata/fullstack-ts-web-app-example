import NextAuth, { Session } from "next-auth"
import Providers from "next-auth/providers"
import { adapter } from "@app/auth/nextAuthAdapter"
import { prisma, User } from "@app/prisma"

export default NextAuth({
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_API_KEY,
      clientSecret: process.env.TWITTER_SECRET_KEY,
    }),
  ],
  adapter: adapter({ prisma, redis: {} }),
  callbacks: {
    session: async (session: Session, user: User) => {
      const nextSession: Session = {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      }

      return Promise.resolve(nextSession)
    },
  },
})
