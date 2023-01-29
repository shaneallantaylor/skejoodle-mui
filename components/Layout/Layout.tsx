import { Grid } from '@mui/material'
import type { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Grid container direction='column' sx={{ minHeight: '100svh' }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Grid >
  )
}