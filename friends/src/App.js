import React, { Component } from 'react';
import './App.css';
import { Router, Route, NavLink } from 'react-router-dom'

//load server
import axios from 'axios';

//load components
import Friend from './components/Friend';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import UpdateForm from './components/UpdateForm';

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

  //post data to server
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

  //update data on server
  updateFriend(updateF) {
    axios.put(`http://localhost5000/friends/${updateF.id}`)
    .then(res => {
      this.setState({
        friends: res.data
      })
      //return to friends page
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err)
    })

  }

  //delete an item from the server 
  unfriend(unfriend) {
    axios.delete(`http://localhost5000/friends/${unfriend}`)
    .then(res => {
      this.setState({
        friends: res.data
      })
      //return to friends page
      this.props.history.push('/')
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
          <nav>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/friendform">
              New Friend
            </NavLink>
          </nav>

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
            <div>
              <Route exact path='/' render={ props => (<FriendsList {...props} friends={this.state.friends} />)}/>
              <Route path='/friend/:id'  render={ props => (<Friend {...props} friends={this.state.friends} />)}/>
              <Route path='/friendform'  render={ props => (<FriendForm {...props} friends={this.state.friends} />)}/>
              <Route path='/updateform'  render={ props => (<UpdateForm {...props} friends={this.state.friends} />)}/>
            </div>
        }
        </ListContainer>
      </div>
    );
}
}

export default App;
