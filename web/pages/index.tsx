import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type Props = {
  users: {
    id: string
    name: string
    email: string
  }[]
}

const Home: NextPage<Props> = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {users.map(user => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://localhost:3333/')
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}