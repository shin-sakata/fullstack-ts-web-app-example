module.exports = {
  client: {
    service: {
      localSchemaFile: 'pages/api/graphql/schema.gql',
    },
    includes: ["pages/api/graphql/client.gql"],
  }
}
