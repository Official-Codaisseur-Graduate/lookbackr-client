import React from 'react'
import Card from './Card'

export default function Retro(props) {
    const glad = props.cards.filter(card=> card.type === 'glad')
    const sad = props.cards.filter(card => card.type === 'sad')
    const mad = props.cards.filter(card => card.type === 'mad')
    return (
        <div className='retro'>
            <div className='column'>
                <h2 className='table-title'>Mad</h2>
                {mad.map(card => <Card card={card} key={card.id} />)}
            </div>
            <div className='column'>
                <h2 className='table-title'>Sad</h2>
                {sad.map(card => <Card card={card} key={card.id} />)}
            </div>
            <div className='column'>
                <h2 className='table-title'>Glad</h2>
                {glad.map(card => <Card card={card} key={card.id} />)}
            </div>
        </div>
    )

}
