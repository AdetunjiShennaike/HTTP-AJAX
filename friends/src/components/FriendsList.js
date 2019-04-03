import React from 'react'
import styled from 'styled-components'

//styling the friend card for the list
let Card = styled.div`
  display: flex;
`




let Friends = (props) => {
  return (
  
    <div className='list'>
      <p>{props.friends.id}:</p>
      <p>{props.friends.name}</p>
      <p>{props.friends.age}</p>
      <p>{props.friends.email}</p>

    </div>
  )  
}


export default Friends