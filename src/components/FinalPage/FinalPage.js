import React from 'react'
import '../stylingComponents.css'

export default function FinalPage(props) {
  if(!props.lobby) {
    return 'loading...'
    }

  const { lobby } = props

  const roomId = 
  lobby
    .filter(room => room.id === 1)
    .map(card => card.cards)
    .map(card => 
      card
        .map(card => <div className={card.type}><h4>{card.type}</h4><p>{card.text}</p></div>)
    )  

  console.log('ROOMID', roomId)
  
  
  
  return (
    <div >
      {roomId}
    </div>
  )
}
