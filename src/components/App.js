import React, {Component} from 'react'
import NavBar from './NavBar'
import GridList from './GifList'
import SearchBox from './SearchBox'
import axios from 'axios'

class App extends Component{

  state = {
    gifs: []
  };

  componentDidMount() {
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=UUkEuZy18qSIDoUXfy0HMbuF2BYNddqX&limit=25&rating=g')
      .then(response => {
        console.log(response);
        this.setState({
          gifs: response.data.data
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
        <SearchBox />
        <GridList data={this.state.gifs} />
      </div>
      
      
    );
  }
  
}

export default App;
