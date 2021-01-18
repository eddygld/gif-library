import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const Gif = (props) => {
    return (
        <div>
            <Card>
                <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={props.imgUrl} >

                </CardMedia>
            </Card>
            {/* <img src={props.imgUrl} alt="" /> */}
        </div>
    )
}

export default Gif
