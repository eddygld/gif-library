import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'



class SearchBox extends Component {

    state = {
        searchText: ''
    }

    handleSearchTextChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }

    render() {
        return (
            <div>
                <Paper component='form'
                        noValidate autoComplete='off'
                        style={{
                                padding: '2px 4px', 
                                display: 'flex', 
                                width: 300, 
                                marginTop: '30px'
                                }}
                        onSubmit={this.handleSubmit} >
                    <InputBase
                        id='gifSearch'
                        placeholder='Search for Gifs'   
                        style={{marginLeft: '10px', flex: 1}}
                        onChange={this.handleSearchTextChange}
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                
            </div>
        )
    }
}

export default SearchBox
