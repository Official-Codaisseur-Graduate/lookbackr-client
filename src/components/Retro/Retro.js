import React from 'react'
import Card from './Card'

export default function Retro(props) {
    //username that made the card
    const showUserName = (cardUser, users) => users.find(user => user.id === cardUser).username
    return (
        <div className='board'>
            <div className='retro'>

                <div className='column'>
                    <h2 className='table-title'>Mad</h2>
                    {props.cards &&
                    props.cards
                    //only take the cards with the mad type
                        .filter(card => card.type === 'mad')
                    //map over the cards (make new array) show text from card with user that made the 
                        .map((card, index) => 
                            <Card card={card} key={index}
                                userName={showUserName(card.userId, props.users)}/>)
                    }
                </div>

                <div className='column'>
                    <h2 className='table-title'>Sad</h2>
                    {props.cards &&
                    props.cards
                        .filter(card => card.type === 'sad')
                        .map((card, index) => 
                            <Card card={card} key={index}
                                userName={showUserName(card.userId, props.users)}/>)
                    }
                </div>

                <div className='column'>
                    <h2 className='table-title'>Glad</h2>
                    {props.cards &&
                    props.cards
                        .filter(card => card.type === 'glad')
                        .map((card, index) => 
                            <Card card={card} key={index}
                                userName={showUserName(card.userId, props.users)}/>)
                    }
                </div>

            </div>
        </div>
    )
}