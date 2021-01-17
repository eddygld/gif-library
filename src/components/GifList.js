import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


const GifList = () => {
    return (
        <div>
            <Grid container spacing={24} style={{padding: 24}} >
                <Grid container spacing={2}>
                    {[0,1,2,3,4,5,6,7,8,9,10].map(item => (
                        <Grid item xs={12} sm={6} lg={4} xl={3} > 
                            <Paper> {item} </Paper>
                        </Grid>
                    ) )}
                </Grid>
            </Grid>
            
        </div>
    )
}

export default GifList
