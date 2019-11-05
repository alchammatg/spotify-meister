// import SearchBox from './Components/search/SearchBox';
// import './App.css';

// fontawesome imports
// import { faSkiing, faHeadphones, faGuitar, faUser, faStopwatch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* icons for pref sliders
energy: skiing
dance: 
bass: headphones
accoustic: guitar
vocal: user
tempo: 
*/

import React from 'react';
import { UserProvider } from './Hooks/UseUser';
import Home from './Views/Home';
import { Box } from '@material-ui/core'


const App = () => {

  // localStorage.removeItem('access_token');
  // localStorage.setItem('access_token', 'FAKE');=

  return (
    <Box>
      <UserProvider>
        <Home/>
      </UserProvider>
    </Box>
  );
}

export default App;
