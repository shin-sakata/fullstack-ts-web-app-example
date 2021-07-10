import type { AppProps } from "next/app"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { Provider as SessionProvider } from "next-auth/client"

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  )
}

export default MyApp
