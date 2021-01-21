import React from 'react'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
// import Button from '@material-ui/core/Button'


const Gif = (props) => {
    return (
        <div>
            <Card style={{
                maxWidth: '240px',
                maxHeight: '200px'
                }} >

                <CardActionArea href={props.imgUrl} target='_blank' >
                    <div style={{
                        display: 'flex',
                        alignItem: 'center',
                        justifyContent: 'center'
                        }} >
                        <CardMedia style={{
                            width: '100%', 
                            height:'100%'
                        }} 
                        component='img' 
                        image={props.imgUrl} />
                    </div>
                </CardActionArea>
                {/* <CardActions>

                </CardActions> */}
            </Card>
            {/* <img src={props.imgUrl} alt="" /> */}
        </div>
    )
}

export default Gif
