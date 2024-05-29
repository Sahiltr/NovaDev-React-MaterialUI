import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
    sx={{display: {xs: "none", sm: "block"}} }>
      <Box sx={{position:'fixed'}}width={350} >
        <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Online Friends</Typography>
        <AvatarGroup max={6} >
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/3.jpg" />
       </AvatarGroup>
       <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Latest Photos</Typography>
       <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" alt="" />
        </ImageListItem>
        
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format" alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format" alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format" alt="" />
        </ImageListItem>
       </ImageList>

       <Typography variant='h6' fontWeight={100} mt={2} >Latest Conversation</Typography>
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem  alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>

      </Box>
    </Box>
  )
}

export default Rightbar
