import React from 'react'
import Grid from '@material-ui/core/Grid'
import Gif from './Gif'


const GifList = (props) => {

    const data = props.data;

    return (
        <div>
            <Grid container spacing={8} justify='center' style={{padding: 24}} >
                    {data.map(item => (
                        <Grid item > 
                            <Gif imgUrl={item.images.fixed_height.url} /> 
                        </Grid>
                    ) )}
            </Grid>
            
        </div>
    )
}

export default GifList
