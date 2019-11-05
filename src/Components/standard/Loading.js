import React from 'react';
import Loader from 'react-loader-spinner'
import { Box, Grid, Typography } from '@material-ui/core';


export default function Loading(props) {
  const type = props.type? props.type : 'ThreeDots';


  //use grid to center
  return (
    <Box mt={20}>
      <Grid container alignItems='center' direction='column' justify='center'>
        <Grid item>
          <Loader type={type} width={100} height={100}/>
        </Grid>
        <Grid item>     
          <Typography color='primary' align='center' variant='subtitle2'>
            {props.message? props.message : "Loading..."}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
