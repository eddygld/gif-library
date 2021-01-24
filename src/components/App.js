import React, {Component} from 'react'
import NavBar from './NavBar'
import GridList from './GifList'
import SearchBox from './SearchBox'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'

class App extends Component{

  state = {
    gifs: [],
    isLoading: true
  };

  componentDidMount() {
    this.getTrendingGifs();
  }

  getTrendingGifs = () => {
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=UUkEuZy18qSIDoUXfy0HMbuF2BYNddqX&limit=24&rating=g')
      .then(response => {
        console.log(response);
        this.setState({
          gifs: response.data.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  searchGif = (searchQuery) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=UUkEuZy18qSIDoUXfy0HMbuF2BYNddqX&q=${searchQuery}&limit=24&offset=0&rating=g&lang=en`)
      .then(response => {
        console.log(response);
        this.setState({
          gifs: response.data.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render () {
    return (
      <div>
        <NavBar />
        <SearchBox onSearch={this.searchGif} />
        {
          (this.state.isLoading) ?
          <Typography variant='h3' align='center' color='primary' >
            Loading...
          </Typography>
          :
          <GridList data={this.state.gifs} />
        }
      </div>
      
      
    );
  }
  
}

export default App;
