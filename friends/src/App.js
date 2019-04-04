import React, { Component } from 'react';
import './App.css';
import Router from 'react-router-dom'

//load server
import axios from 'axios';

//load componenets
import Friends from './components/FriendsList';

//import loader and styler
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

let ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

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

  newFriend(newF) {
    axios.post('http://localhost5000/friends', newF)
    .then(res => {
      this.setState({
        friends: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateFriend(updateF) {
    axios.put(`http://localhost5000/friends/${updateF.id}`)
    .then(res => {
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

          <ListContainer>
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
          </ListContainer>
        </div>
      );
  }
}

export default App;
