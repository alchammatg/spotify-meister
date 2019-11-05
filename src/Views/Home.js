// Views/Home.jsx
 
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles/';
import CssBaseline from "@material-ui/core/CssBaseline";
import { mainTheme } from '../Style/Theme';
import { useUser } from '../Hooks/UseUser'
import Loading from '../Components/standard/Loading';

const Login = React.lazy(() => import('../Views/Login'));
const Main = React.lazy(() => import('../Views/Main'));
 

export default function Home() {
  /*
  Conditional Render:
    If none or invalid token: <Login />
    If valid token: <Main />
    If awaiting state: <Loading />
  */

  const { user, ready } = useUser();



  return (
    <MuiThemeProvider theme={mainTheme}>
        <CssBaseline />
        {ready?
          <React.Suspense fallback={<Loading message="Preparing UI..."/>}>
            {user.display_name? <Main /> : <Login />}
          </React.Suspense>
          :
          <Loading message="Checking account data..."/>
        }
    </MuiThemeProvider>
  );
}
