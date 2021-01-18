import React from 'react'
import TextField from '@material-ui/core/TextField'

const SearchBox = () => {
    return (
        <div>
                <TextField style={{padding: 24}}
                    id="gifSearch"
                    placeholder="Search for Gifs"   
                    margin="normal"
                    // onChange={}
                />
            
        </div>
    )
}

export default SearchBox
