import { Grid } from "@mui/material";


export default function ViewMeeting({ meetingId }: { meetingId: string | string[] | undefined }) {
  return (
    <Grid container direction='column' wrap='nowrap' sx={{ borderRadius: '8px', width: '100%' }}>
      <p>ViewMeeting: {meetingId}</p>
    </Grid>
  )

}