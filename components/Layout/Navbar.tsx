import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <Grid container direction='row' justifyContent='space-between'>
      <Typography lineHeight={'72px'} variant="h4">Skejoodle</Typography>
      <Link href='/create' style={{ textDecoration: 'none', alignSelf: 'center' }}>
        <Button
          variant='contained'
          disableElevation
          disableFocusRipple
          disableRipple
        >
          Create Meeting
        </Button>
      </Link>
    </Grid>
  )
}