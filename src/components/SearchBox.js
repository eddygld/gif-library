import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

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
                <form noValidate autoComplete="off" style={{padding: 24}} onSubmit={this.handleSubmit} >
                    <TextField variant="outlined"
                        id="gifSearch"
                        label="Search for Gifs"   
                        margin="normal"
                        type="search"
                        onChange={this.handleSearchTextChange}
                    />
                </form>
                
            </div>
        )
    }
}

export default SearchBox
