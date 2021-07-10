import { ApolloServer, Config } from "apollo-server-micro"
import { importSchema } from "graphql-import"
import { Hello, QueryResolvers } from "../types/schema"

const typeDefs = importSchema("pages/api/schema.gql")

const hello: Hello = { msg: "GraphQL", name: "hoge" }

const Query: QueryResolvers = {
  greet: () => hello,
}

const resolvers = {
  Query,
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
