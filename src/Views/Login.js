/*
Prompt users to login as guest or use their
own Spotify account
*/

import React from 'react';
import styled from 'styled-components';
import { Box, Grid, Typography, Button } from '@material-ui/core';


const XBox = styled(Box)`
  background-color: #191414;
`


export default function Login() {    
    return(
        <Box mx={2} mt={20}>
        <Grid container spacing={3} alignItems='center' direction='column'>
            <Grid item>
                <Typography color='primary' variant='h5'>WELCOME</Typography>
                <hr/>
            </Grid>
            <Grid item fullWidth>
                <Button fullWidth variant="contained" color='secondary' onClick={directToLogin}>
                    <Typography color='primary' variant='button'>User Login</Typography>
                </ Button>
            </Grid>
            <Grid item>
                <Button fullWidth variant="contained" color='secondary' onClick={directToLogin}>
                    <Typography color='primary' variant='button'>Demo Login</Typography>
                </ Button>
            </Grid>
        </Grid>
        </Box>
    )
}


var directToLogin = () => {

    const Spotify = require('../spotify-api');

    const params = new URLSearchParams({
        'client_id' : Spotify.client.id,
        'response_type' : 'token',
        'redirect_uri' : Spotify.client.redirect_uri,
        'state' : 'reactteset',
    }).toString();

    const authUrl = Spotify.urls.auth + '?' + params;
    window.location.replace(authUrl);
}