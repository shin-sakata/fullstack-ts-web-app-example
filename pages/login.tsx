import { signIn, signOut, useSession } from "next-auth/client"

export default function Login() {
  const [session] = useSession()

  if (session) {
    return (
      <>
        <h1>Logout</h1>

        <p>{session.user.name}</p>

        <button onClick={() => signOut()}>SignOut</button>
      </>
    )
  }

  return (
    <>
      <h1>Login</h1>

      <button onClick={() => signIn("twitter")}>Login with Twitter</button>
    </>
  )
}
