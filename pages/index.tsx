import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client"

const GREET = gql`
  query {
    hello
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(GREET)

  if (loading) return <p>loading...</p>
  if (error) {
    console.error(error)
    return <p>Error!</p>
  }

  return <h1>Hello {data.hello}</h1>
}
