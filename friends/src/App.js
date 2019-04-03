import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/FriendsList';
import Loader from 'react-loader-spinner'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }


  componentDidMount() {
    //ajax command to get information form the server
    axios.get('http://localhost:5000/friends')
    .then(res => {
      console.log(res)
      this.setState({
        friends: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    console.log(this.state.friends)
      return (
        <div className="App">
          <header className="App-header">
            <h1 className='title'>Here's all the friends you have.</h1>
            <h3 className='joke'>Which is not a lot...</h3>         
          </header>

          {this.state.friends.length === 0 
          ? 
            <Loader className='loading'
              type="Triangle"
              color="green"
              height="100"	
              width="100"
            />
          :
            this.state.friends.map( event => 
            <Friends key={event.id} friends={event}/>
            )
          }
        </div>
      );
  }
}

export default App;
