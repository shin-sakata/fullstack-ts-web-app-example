import NextAuth, { DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: User
  }

  interface User extends DefaultUser {
    id: string
  }
}
