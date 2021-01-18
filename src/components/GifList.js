import React from 'react'
import Grid from '@material-ui/core/Grid'
import Gif from './Gif'


const GifList = (props) => {

    const data = props.data;

    return (
        <div>
            <Grid container spacing={2} style={{padding: 24}} >
                <Grid container spacing={2}>
                    {data.map(item => (
                        <Grid item xs={12} sm={6} lg={4} xl={3} > 
                            <Gif imgUrl={item.images.fixed_height.url} /> 
                        </Grid>
                    ) )}
                </Grid>
            </Grid>
            
        </div>
    )
}

export default GifList
