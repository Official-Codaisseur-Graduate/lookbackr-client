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
        .map(card => card.type)
    )  //check type of card and put it in the right 

  console.log('ROOMID', roomId)
  
  
  
  return (
    <div className='typeContainer'>
      {roomId}
    </div>
  )
}
