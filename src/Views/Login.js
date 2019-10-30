/*
Prompt users to login as guest or use their
own Spotify account
*/

import React from 'react';
const Spotify = require('../spotify-api');

export default function Login() {
    let params = {
        'client_id' : Spotify.client.id,
        'response_type' : 'token',
        'redirect_uri' : Spotify.client.redirect_uri,
        'state' : 'reactteset',
    }
    params = new URLSearchParams(params).toString();
    const authUrl = Spotify.urls.auth + '?' + params;

    return(
        <div>
            <h2>LOGIN SAYS HELLO</h2>
            <a href={authUrl}><p>CLICK TO LOGIN AS USER</p></a>
            <p>CLICK TO LOGIN AS GUEST</p>
        </div>
    )
}
