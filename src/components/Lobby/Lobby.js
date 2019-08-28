import React from 'react'
import LobbyForm from './LobbyForm'
import { Link } from 'react-router-dom'

export default function Lobby(props) {
  
  const { onAdd, onChange, onSubmit, values } = props
  const { editMode } = values
  const lobbyForm = <LobbyForm onChange={onChange} onSubmit={onSubmit} values={values} />
  const form = editMode && lobbyForm

  return (
      <div>

        <div className='explanationText'>Enter in a room with your team to start the retrospective meeting.</div>
    <div>
      <div className='roomArea'>
      {props.lobby && props.lobby
      .map((room, index) =>
          <div className='roomItem'  key={index} >
            <Link to={`/retrospectives/${room.id}`}>{room.name}</Link>
            <div>
              {room.description}
            </div>
          </div>
        )}
      </div>
      {form}

      <p>Did not have a room for your team? Create a new one:</p>
      <button onClick={onAdd} className='button'>Make a new room</button>
    </div>
      </div>
  )
}
