import { Grid } from '@mui/material'
import type { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Grid container alignItems='center' direction='column' sx={{ minHeight: '100svh' }}>
      <Grid
        component='nav'
        item
        sx={{
          textAlign: 'left',
          minHeight: 72,
          width: '100%',
          paddingLeft: '20px',
          paddingRight: '20px',
          marginBottom: '20px'
        }}
      >
        <Navbar />
      </Grid>
      <Grid
        component='main'
        item
        sx={{
          width: '100%',
        }}
        style={{ maxWidth: '800px' }}
      >
        {children}
      </Grid>
      <Footer />
    </Grid >
  )
}