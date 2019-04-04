import React from 'react'
import styled from 'styled-components'

//styling the friend card for the list
let Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  border: 1.5px solid blue;
  padding: 5px
  margin: 10px;
`

let Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  font-size: 1.25rem;
`


let Friends = (props) => {
  return (
  
    <Card className='list'>
      <h2>{props.friends.id}:</h2>
      <Info>
        <p>{props.friends.name} : Name</p>
        <p>{props.friends.age} : Age</p>
        <p>{props.friends.email} : Email</p>
      </Info>
    </Card>
  )  
}


export default Friends