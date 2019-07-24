import React from 'react'
import Card from './Card'

export default function Retro2(props) {
    return (
        <div className='retro'>
            <div className='column'>
                <h2 className='table-title'>Stop</h2>
                {props.cards && 
                    props.cards
                        .filter(card => card.type === 'stop')
                        .map((card, index) => <Card card={card} key={index} />)
                }
            </div>
            <div className='column'><h2 className='table-title'>Start</h2>
            {props.cards && 
                    props.cards
                        .filter(card => card.type === 'start')
                        .map((card, index) => <Card card={card} key={index} />)
                }
            </div>
            <div className='column'><h2 className='table-title'>Keep</h2>
            {props.cards && 
                    props.cards
                        .filter(card => card.type === 'keep')
                        .map((card, index) => <Card card={card} key={index} />)
                }</div>
        </div>
    )

}
