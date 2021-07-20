import * as db from "@app/prisma"
import type { Profile as NextAuthProfile } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { Adapter, AdapterInstance } from "next-auth/adapters"

type Client = { prisma: db.PrismaClient; redis: any }

type User = db.User
type Profile = NextAuthProfile & { emailVerified?: Date | undefined }
type Session = db.Session

export const adapter: Adapter<
  Client,
  never,
  User,
  Profile & {
    emailVerified?: Date
  },
  Session
> = ({ prisma }) => {
  return {
    async getAdapter({ session, secret, ...appOptions }) {
      const prismaAdapter: AdapterInstance<User, Profile, Session> = await PrismaAdapter(
        prisma
      ).getAdapter({ session, secret, ...appOptions })

      return {
        ...prismaAdapter,
        // Redisに以降したい場合は下記のメソッドをオーバーライドする
        // displayName: "PRISMA & REDIS",
        // createSession(user: User): Promise<Session> {
        //   return {} as any
        // },
        // getSession(sessionToken: string): Promise<Session | null> {
        //   return {} as any
        // },
        // updateSession(session: Session, force?: boolean): Promise<Session | null> {
        //   return {} as any
        // },
        // deleteSession(sessionToken: string): Promise<void> {
        //   return {} as any
        // },
      }
    },
  }
}
