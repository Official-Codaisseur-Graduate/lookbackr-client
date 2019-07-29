import React from 'react'
import Card from './Card'

export default function Retro(props) {
  return (
    <div className='retro'>
      <div className='column'>
        <h2 className='table-title'>Mad</h2>
        {props.cards && 
          props.cards
            .filter(card => card.type === 'mad')
            .map((card, index) => <Card card={card} key={index} />)
        }
      </div>
      <div className='column'>
        <h2 className='table-title'>Sad</h2>
        {props.cards && 
          props.cards
            .filter(card => card.type === 'sad')
            .map((card, index) => <Card card={card} key={index} />)
        }
      </div>
      <div className='column'>
        <h2 className='table-title'>Glad</h2>
        {props.cards && 
          props.cards
            .filter(card => card.type === 'glad')
            .map((card, index) => <Card card={card} key={index} />)
        }
      </div>
    </div>
  )
}
