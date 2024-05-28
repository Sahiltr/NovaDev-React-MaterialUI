import { Pets } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Navbar = () => {
  return (
    <div>
      <AppBar position='sticky'>
        <StyledToolbar><Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}} >LAMA DEV</Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}} />
       </StyledToolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
