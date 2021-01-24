import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'

const NoGif = () => {
    return (
        <div>
            <Grid container spacing={8} justify='center' style={{padding: 24}} >
                        <Grid item  > 
                            <div style={{
                                display: 'flex',
                                alignItem: 'center',
                                justifyContent: 'center'
                            }} >
                                <SentimentDissatisfiedIcon style={{ fontSize: 150}} color='primary' />
                            </div>
                            <Typography variant='h3' align='center' color='primary' >
                                Sorry, no GIFs match your search.
                            </Typography>
                        </Grid>
            </Grid>  
        </div>
    )
}

export default NoGif
