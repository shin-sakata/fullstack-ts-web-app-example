import { ApolloServer, Config } from "apollo-server-micro"
import { importSchema } from "graphql-import"
import { Resolvers } from "./types/graphql"

const typeDefs = importSchema("./schema.qgl")

const hello: Resolvers["Query"]["hello"] = (parent, args, context) => "world"

const resolvers: Resolvers = {
  Query: { hello },
  Mutation: {},
}

const config: Config = {
  typeDefs,
  resolvers,
}

const apolloServer = new ApolloServer(config)
