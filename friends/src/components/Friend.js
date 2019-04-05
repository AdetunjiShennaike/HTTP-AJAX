import React from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import styled from 'styled-components'


export default class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null
    };
  }

  componentDidMount() {
    this.getFriend(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.getFriend(newProps.match.params.id);
    }
  }

  getFriend = id => {
    axios.get('localhost:5000/friends/:id')
    .then( res =>
      this.setState({
      id = res.data.id
      })
    )
    .catch( err => 
      console.log(err)
    )
  };

  Friended = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.friend);
  };

  render() {
    console.log(this.state.friend)
    if (!this.state.friend) {
      return <div>Loading supposed friend's information...</div>;
    }

    return (
      <div className="card-wrapper">
        <FriendCard friend={this.state.friend} />
        <div className="update-button" onClick={this.updatef}>
          Update
        </div>
        <div className="delete-button" onClick={this.unfriend}>
          Unfriend
        </div>
      </div>
    );
  }
}
