import React from 'react'


let Friends = (props) => {
  return (
  
    <div className='list'>
      <p>{props.friends.name}</p>
      <p>{props.friends.age}</p>
      <p>{props.friends.email}</p>
      <p>{props.friends.id}</p>

    </div>
  )  
}


export default Friends