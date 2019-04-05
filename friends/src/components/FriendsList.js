import React from 'react'
import styled from 'styled-components'

import Link from 'react-router-dom'
import FriendCard from './FriendCard'


let FriendsList = (props) => {
  return ( 
    props.friends.map( event => 
      <FriendDetails key={event.id} friends={event}/>
    )
  )  
}

function FriendDetails({ friends }) {
  return (
    <Link to={`/friend/${friends.id}`}>
      <FriendCard friends={friends} />
    </Link>
  );
}



export default FriendsList