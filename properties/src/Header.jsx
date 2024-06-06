import React from 'react'

export default function Header(props) {
  return (
    <div>
      {/* <h1> Name: {props.name}</h1>
      <h2> Age: {props.age}</h2>
      <h1> Name: {props.name}</h1>
      <h2> Age: {props.age}</h2> */}
      <h1>
        {props.person.name}  {props.person.age}  {props.person.message} {props.person.seatNumber}
      </h1>
    </div>
  )
}
