import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import DisplayArt from './components/DisplayArt'
import LoadingSpinner from './components/LoadingSpinner';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      art: null,
      loading: false
    }
    this.getArt = this.getArt.bind(this);
  }

  componentDidMount() {
    this.getArt()
      };
      getArt (){
        this.setState({ loading: true }, () => {
          // Send the request  
          axios.get('https://api.harvardartmuseums.org/object?apikey=8c76c33c-bdea-47fe-bac3-662ac7f085cc')  
            // Extract the DATA from the received response  
            .then(response => response.data)  
            // Use this data to update the state  
            .then(data => {  
              this.setState({ 
                loading: false, 
                art: data.records[0]  
              });  
          });  
        }
          )
      }

  render() {
    const { art, loading } = this.state;
  return (
    <div className="App">
      {loading || !art ? <LoadingSpinner /> : <DisplayArt art={art}/>}
        <button type="button" onClick={this.getArt}>Get art</button>     
    </div>
  );
}
}

export default App;
