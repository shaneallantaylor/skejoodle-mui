import Head from 'next/head'
import { useRouter } from 'next/router'

import ViewMeeting from '../../components/ViewMeeting';

export default function Meeting() {
  const router = useRouter();
  const { meetingId } = router.query;
  return (
    <>
      <Head>
        <title>Skejoodle | View Meeting</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewMeeting meetingId={meetingId} />
    </>
  )
}