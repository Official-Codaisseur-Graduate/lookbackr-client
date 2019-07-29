import React from 'react'
export default function Card(props) {
  return (
    <div className={`cardItem ${props.card.type}`}>
      <p><strong>{props.card.text}</strong></p>
      <p>{props.userName}</p>
    </div>
  )
}