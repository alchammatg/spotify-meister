import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const Spotify = require('../spotify-api');

async function getCurrentUser(accessToken) {
  /*
  Param: accessToken
  Return:  current user if successful, undefined if no token, null if failed
  */

  try {
    // get user data from spotify api
    const url = Spotify.urls.base + Spotify.urls.account;
    let config = {headers: {'Authorization': 'Bearer ' + accessToken}};
    const response = await axios.get(url, config);
    return (Object.keys(response)[0] !== "error")? response.data : null;
  } 
  catch(error) {
    console.log(error);
    return null;
  };
}
 
const initialState = {
  user: {},
  accessToken: undefined,
};
 
const UserContext = createContext(initialState);
 
export function UserProvider({ children }) {
  const [accessToken, setAccessToken] = useState(initialToken());
  const [user, setUser] = useState({});
  const [ready, setReady] = useState(false);

  
  async function handleAccessTokenChange() {
    if (!user.name && accessToken) {
      //new access token is not null or undefined
      const spotifyUser = await getCurrentUser(accessToken);
      if (spotifyUser == null){
        //call to spotify api failed
        console.log("BAD TOKEN");
        setUser(initialState.user);
        localStorage.removeItem('access_token');
        // setReady(true);
        setTimeout(setReady, 1000, true); //longer loading screen

      }
      else {
        //successful account get
        console.log("OK TOKEN");
        localStorage.setItem('access_token', accessToken);
        setUser(spotifyUser);
        // setReady(true);
        setTimeout(setReady, 500, true); //longer loading screen
      };
    } 
    else if (!accessToken) {
      //new access token is null or undefined
      console.log("NO TOKEN");
      localStorage.removeItem('access_token');
      setUser(initialState.user);
      // setReady(true);
      setTimeout(setReady, 500, true); //longer loading screen
    };
  }
 
  useEffect(() => {
    handleAccessTokenChange();
    // eslint-disable-next-line
  }, [accessToken]);
 
  return (
    <UserContext.Provider value={{ user, accessToken, setAccessToken, ready }}>
      {children}
    </UserContext.Provider>
  );
}


const initialToken = () => {
  const locToken = localStorage.getItem('access_token');
  const urlToken = getUrlToken(); //Check if redirected from auth
  return locToken? locToken : urlToken; //Both could be null, that is ok
}

const getUrlToken = () => {
  let url = window.location.href;
  //look for error
  const queryString = url.split('?')[1];
  if (queryString) {
      const params = queryString.split('&');
      for (let i in params) {
          if (params[i] === 'error=access_denied') {
              return null;
          };
      };
  };

  //look for token
  const hash = window.location.hash.substr(1).split('&');
  for (let index in hash){
      const split = hash[index].split('=');
      if (split[0] === 'access_token') {
          return split[1];
      }
  }
  return null;
}

export const useUser = () => useContext(UserContext);