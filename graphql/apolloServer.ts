import { ApolloServer, AuthenticationError } from "apollo-server-micro"
import { importSchema } from "graphql-import"
import { Hello, QueryResolvers } from "@graphql/schema"
import { getSession } from "next-auth/client"
import { Session } from "next-auth"
import { NextApiRequest } from "next"

const typeDefs = importSchema("graphql/schema.gql")

const hello: Hello = { msg: "GraphQL", name: "hoge" }

const Query: QueryResolvers = {
  greet: () => {
    return hello
  },

  privateGreet: (_, __, ctx) => {
    if (ctx.session?.user) {
      console.log(ctx.session.user)
      return hello
    } else {
      throw AuthenticationError
    }
  },
}

const resolvers = {
  Query,
}

const context = async (ctx: { req: NextApiRequest }) => {
  const session = await getSession(ctx)
  return { session }
}

export type Context = { session: Session | null }

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})
