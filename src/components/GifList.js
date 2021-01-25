import React from 'react'
import Grid from '@material-ui/core/Grid'
import Gif from './Gif'
import NoGif from './NoGif'


const GifList = (props) => {

    const data = props.data;

    return (
        <div>
            {
                (data.length) ? 
                <Grid container spacing={4} justify='center' style={{padding: 24}} >
                        {data.map(item => (
                            <Grid item key={item.id} > 
                                <Gif imgUrl={item.images.fixed_height.url} key={item.id} /> 
                            </Grid>
                        ) )}
                </Grid>
                :
                <NoGif />
            }
        </div>
    )
}

export default GifList
