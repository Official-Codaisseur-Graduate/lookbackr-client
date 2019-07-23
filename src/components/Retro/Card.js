import React from 'react'

export default function Card (props) {
   
        return (
            <div className={`cardItem ${props.card.type}`}>
                <p>{props.card.text}</p>
            </div>
        )

}
