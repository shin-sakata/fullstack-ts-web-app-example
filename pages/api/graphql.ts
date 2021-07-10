import { apolloServer } from "@app/graphql/apolloServer"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: "/api/graphql" })
