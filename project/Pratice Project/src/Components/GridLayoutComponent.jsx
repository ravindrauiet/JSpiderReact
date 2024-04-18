import React from 'react'
import Grid from '@mui/material/Grid';

function GridLayoutComponent({children}) {
  return (
    <Grid item xs={12} container spacing={2}>
        <Grid item lg={3} sm={6} xs={12} > 
            <h1 style={{BackgroundColor:"green"}}> {children}</h1>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} > 
            <h1 style={{BackgroundColor:"green"}}> {children}</h1>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} > 
            <h1 style={{BackgroundColor:"green"}}> {children}</h1>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} > 
            <h1 style={{BackgroundColor:"green"}}> {children}</h1>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} > 
            <h1 style={{BackgroundColor:"green"}}> {children}</h1>
        </Grid>
    </Grid>
  )
}

export default GridLayoutComponent
