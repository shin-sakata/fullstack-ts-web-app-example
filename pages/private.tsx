import { usePrivateGreetQuery } from "@graphql/client"

export default function Private() {
  const { error, data, loading } = usePrivateGreetQuery()

  if (loading) return <p>loading...</p>
  if (error) {
    console.error(error.message)
    return <p>Error!</p>
  }

  if (data) {
    return (
      <h1>
        Hello {data.privateGreet.name} {data.privateGreet.msg}
      </h1>
    )
  }
}
