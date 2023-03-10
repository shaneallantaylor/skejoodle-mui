import { Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Skejoodle | Create Meeting</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography variant='h2'>Home Page</Typography>
        <Link href={'/create'}>Create Meeting</Link>
      </main>
    </>
  )
}
