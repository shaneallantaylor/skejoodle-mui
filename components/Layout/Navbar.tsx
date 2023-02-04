import { Typography } from "@mui/material";

export default function Navbar() {
  return (
    <div style={{
      textAlign: 'left',
      background: '#f3786a',
      minHeight: 72,
      width: '100%',
      paddingLeft: '20px',
      marginBottom: '20px'
      // boxShadow: '0px 6px 15px -3px rgba(0,0,0,0.1)'
    }}>
      <Typography lineHeight={'72px'} variant="h4">Skejoodle</Typography>
    </div>
  )
}