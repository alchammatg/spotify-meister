// Views/Home.jsx
 
import React from 'react';
import { useUser } from '../Hooks/UseUser'
import { MuiThemeProvider } from '@material-ui/core/styles/';
import { Typography } from '@material-ui/core';
import { barTheme } from '../Style/Theme';
import AppBar from '../Components/standard/AppBar'

 
export default function Home() {
  const { user, setAccessToken } = useUser();

  const logOut = () => {
    setAccessToken(null);
  }

  return (
    <div>
      <MuiThemeProvider theme={barTheme}>
      <AppBar loggedIn={true} logOut={logOut}/>
      </MuiThemeProvider>
      <Typography color='primary'>{"Hello " + JSON.stringify(user)}</Typography>
    </div>
  );
}