import React from 'react'
import '../stylingComponents.css'

export default function FinalPage(props) {
  if(!props.lobby) {
    return 'loading...'
    }

  const { lobby } = props

  const sad = []
  const mad = []
  const glad = []
  const start = []
  const stop = []
  const keep = []
  
  const cards = 
  lobby
    .filter(room => room.id === 1)
    .map(card => card.cards)
    .map(card => 
      card
        .map(card => 
          card.type === 'sad'? 
          sad.push(card):
          card.type === 'mad'?   
          mad.push(card):
          card.type === 'glad'? 
          glad.push(card):
          card.type === 'start'? 
          start.push(card):
          card.type === 'stop'?   
          stop.push(card):
          keep.push(card)
          // <div className={card.type}><h4>{card.type}</h4><p>{card.text}</p></div>
        )
    )  
  
  
  return (
    <div >
      <div className="grid-container">
        <div className="grid-item">
          <h4>SAD</h4>
          {sad.map(card => <div className='card sad2' >{card.text}</div>)}
        </div>
        <div className="grid-item">
          <h4>MAD</h4>
          {mad.map(card => <div className='card mad2'>{card.text}</div>)}
        </div>
        <div className="grid-item">
          <h4>GLAD</h4>
          {glad.map(card => <div className='card glad2'>{card.text}</div>)}
        </div>
        <div className="grid-item">
          <h4>STOP</h4>
          {stop.map(card => <div className='card stop2'>{card.text}</div>)}
        </div>
        <div className="grid-item">
          <h4>START</h4>
          {start.map(card => <div className='card start2'>{card.text}</div>)}
        </div>
        <div className="grid-item">
          <h4>KEEP</h4>
          {keep.map(card => <div className='card keep2'>{card.text}</div>)}
        </div>
      </div>
    </div>
  )
}
