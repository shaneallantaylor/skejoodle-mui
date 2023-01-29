import Head from 'next/head'
import CreateAccordion from '../components/CreateAccordion'
export default function Create() {
  return (
    <>
      <Head>
        <title>Skejoodle | Create Meeting</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateAccordion />
    </>
  )
}
