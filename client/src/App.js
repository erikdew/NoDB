import React, { Component } from 'react';
import './App.css';
import axios from 'axios'



const BASE_URL = 'http://localhost:3005'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchParam: '',
      pics: []
    }
  }


  getPics = () => {
    axios.post(BASE_URL + '/api/getPictures', { searchParam: this.state.searchParam })
      .then((response) => {
        this.setState({ pics: response.data.data })
      })
  }

  handleImageInput = (e) => {
    this.setState({ searchParam: e.target.value })
  }

  handleClick = (e) => {
    this.setState({ searchParam: '' })
    this.getPics()
  }



  render() {
    console.log('this.state', this.state)
    let className = 'Display'
    const itemsToDisplay = this.state.pics.map((pic) => {
      return (
        <div>
          {pic.images && <img className="display" src={pic.images[0].link} />}
        </div>
      )
    })
    return (
      <div className="App">
        <div>
          <input type="search" className="Input" value={this.state.searchParam} onChange={this.handleImageInput} />
          <button className="Button" onClick={this.handleClick}>SEARCH</button>
        </div>

        <div className="display-container">
          {itemsToDisplay}
        </div>

      </div>
    );
  }
}

export default App;
