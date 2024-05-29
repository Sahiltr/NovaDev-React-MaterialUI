import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}));

const Icons = styled("div")(({theme})=>({
  display:'none',
   gap:'18px',
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display: 'flex'
  }
    
}));

const UserBox = styled("div")(({theme})=>({
  display:'flex',
   gap:'18px',
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display: 'none'
  }
    
}));



const Navbar = () => {

  const [Open, setOpen] = useState(false)

  return (
    <div>
      <AppBar position='sticky'>
        <StyledToolbar><Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}} >LAMA DEV</Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}} />
        <Search><InputBase placeholder='search' /></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
          <Mail/>
        </Badge>
        <Badge badgeContent={4} color="error">
          <Notifications/>
        </Badge>
        <Avatar sx={{width:30, height:30}} src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg' 
        onClick={e=>setOpen(true)}
        />
        </Icons>

        <UserBox>
        <Avatar sx={{width:30, height:30}} src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
        onClick={e=>setOpen(true)}
        />
        <Typography onClick={e=>setOpen(true)} >Sahil</Typography>
        </UserBox>
       </StyledToolbar>

       <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={Open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
    </div>
  )
}

export default Navbar
