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


const App = () => {
  //AUTH SETUP
  //https://codious.io/user-management-with-react-hooks/
  
  //FAKE LOGIN
  // localStorage.setItem('access_token', 'awesomeAccessToken123456789');
  localStorage.removeItem('access_token');


  return (
    <div>
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
