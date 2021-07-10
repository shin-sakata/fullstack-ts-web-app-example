import { useGreetQuery } from "./api/types/client"

export default function Home() {
  const { error, data } = useGreetQuery()

  if (!data) return <p>loading...</p>
  if (error) {
    console.error(error.message)
    return <p>Error!</p>
  }

  return (
    <h1>
      Hello {data.greet.name} {data.greet.msg}
    </h1>
  )
}
