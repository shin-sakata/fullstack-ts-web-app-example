import { ApolloServer, Config } from "apollo-server-micro"
import { importSchema } from "graphql-import"
import { Resolvers } from "./types/graphql"

const typeDefs = importSchema("pages/api/schema.gql")

const hello: Resolvers["Query"]["hello"] = (parent, args, context) => "world"

const resolvers: Resolvers = {
  Query: { hello },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: "/api/graphql" })
