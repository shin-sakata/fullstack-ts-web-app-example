import { useGreetQuery } from "@graphql/client"

export default function Home() {
  const { error, data, loading } = useGreetQuery()

  if (loading) return <p>loading...</p>
  if (error) {
    console.error(error.message)
    return <p>Error!</p>
  }

  if (data) {
    return (
      <h1>
        Hello {data.greet.name} {data.greet.msg}
      </h1>
    )
  }
}
