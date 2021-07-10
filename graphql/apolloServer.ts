import { ApolloServer } from "apollo-server-micro"
import { importSchema } from "graphql-import"
import { Hello, QueryResolvers } from "@graphql/schema"

const typeDefs = importSchema("graphql/schema.gql")

const hello: Hello = { msg: "GraphQL", name: "hoge" }

const Query: QueryResolvers = {
  greet: () => hello,
}

const resolvers = {
  Query,
}

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})
