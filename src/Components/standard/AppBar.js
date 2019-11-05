import React from 'react';
import { AppBar, IconButton, Typography ,
Toolbar} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import ExitToApp from '@material-ui/icons/ExitToApp';

export default (props) => {
  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon color="secondary"/>
        </IconButton>
        <Typography variant="h6">
          Spotify Meister
        </Typography>

        {props.loggedIn?
          <IconButton onClick={props.logOut} edge="end" className={'null'} color="inherit" aria-label="menu">
            <ExitToApp color="secondary"/>
          </IconButton> 
          :
          null
        }
      </Toolbar>
    </AppBar>
  )
} 