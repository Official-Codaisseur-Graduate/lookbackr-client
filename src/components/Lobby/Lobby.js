import React from 'react'
import LobbyForm from './LobbyForm'
import { Link } from 'react-router-dom'

export default function Lobby(props) {
  
  const { onAdd, onChange, onSubmit, values, onClickDelete } = props
  const { editMode } = values
  const lobbyForm = <LobbyForm onChange={onChange} onSubmit={onSubmit} values={values} />
  const form = editMode && lobbyForm

  return (
      <div>
        <div className='explanation-text'>
          <p>Enter in a room with your team to start the retrospective meeting. Or create a new one.</p>
          <button onClick={onAdd} className='button'>Make a new room</button>
        </div>

        {form}
    <div>
      <div className='room-area'>
      {props.lobby && props.lobby
      .map((room, index) =>

          <div className='room-item'  key={index} >
            <Link to={`/retrospectives/${room.id}`}>{room.name}</Link>
            <p>
              {room.description}
            </p>

            <button className='buttonDelete' onClick={onClickDelete(room.id)}></button>
          </div>
        )}
      </div>



    </div>
      </div>
  )
}
