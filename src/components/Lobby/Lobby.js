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
      {props.lobby && props.lobby
      .map((room, index) =>
        <li className='name list' key={index} >
          <div >
            <Link to={`/retrospectives/${room.id}`}>{room.name}</Link>
          </div>
          <div>
            {room.description}
          </div>
        </li>)}
      {form}
      <button onClick={onAdd} className='button'>ADD ROOM</button>
    </div>
  )
}
