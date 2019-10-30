import React from 'react';
import { AppBar, IconButton, Typography ,
Toolbar, Button} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from '@material-ui/icons/AccountCircle';


export default (props) => {
  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={'hello'} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" className={'null'}>
          Spotify Meister
        </Typography>
        <IconButton edge="end" className={'null'} color="inherit" aria-label="menu">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
} 