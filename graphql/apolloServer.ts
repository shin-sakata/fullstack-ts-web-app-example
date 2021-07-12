import { ApolloServer, AuthenticationError } from "apollo-server-micro"
import { importSchema } from "graphql-import"
import { Hello, QueryResolvers } from "@graphql/schema"
import { getSession } from "next-auth/client"

const typeDefs = importSchema("graphql/schema.gql")

const hello: Hello = { msg: "GraphQL", name: "hoge" }

const Query: QueryResolvers = {
  greet: () => {
    return hello
  },

  privateGreet: (_, __, ctx) => {
    if (ctx.user) {
      return hello
    } else {
      throw AuthenticationError
    }
  },
}

const resolvers = {
  Query,
}

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (context) => {
    const session = await getSession(context)
    return session
  },
})
