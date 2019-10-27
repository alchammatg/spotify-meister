//Prompt users to login as guest or use their own Spotify account
//Library imports
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export default function Login() {

    return(
        <div>
            <p>LOGIN SAYS HELLO</p>
            <p>CLICK TO LOGIN AS GUEST</p>
            <p>CLICK TO LOGIN AS USER</p>
        </div>
    )
}






// const oldlogin = () => {
//     let params = {
//         'client_id' : Spotify_Auth.apiData.client.id,
//         'response_type' : 'token',
//         'redirect_uri' : 'http://localhost:5500/',
//         'state' : '123test',
//     }
//     // &-seperated params
//     params = new URLSearchParams(params).toString();

//     const AUTHORIZATION_URL = Spotify_Auth.apiData.urls.auth + '?' + params;

//     popup = window.open(
//         AUTHORIZATION_URL,
//         'Login with Spotify',
//         'width=800,height=600'
//       );
//     popup.focus();
// }