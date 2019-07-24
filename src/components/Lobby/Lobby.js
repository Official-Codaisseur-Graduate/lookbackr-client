import React from 'react'
import LobbyForm from './LobbyForm'
import { Link } from 'react-router-dom'
import UserFormContainer from '../User/UserFormContainer';

export default function Lobby(props) {
  if (!props.lobby) {
    return 'loading...'
  }

  const { lobby, onAdd, onChange, onSubmit, values } = props
  const { editMode } = values
  const lobbyForm = <LobbyForm onChange={onChange} onSubmit={onSubmit} values={values} />
  // const userform = <UserFormContainer/>
  const form = editMode && lobbyForm

  const lobbyList = lobby.map((room, index) =>
    <li className='name list' key={index} >

      <div >
        <Link to={`/retrospectives/${room.id}`}>{room.name}</Link>
      </div>
      <div>
        {room.description}
      </div>

    </li>)


  return (
    <div>
      {lobbyList}
      {form}
      {/* {userform} */}
      <button onClick={onAdd}>ADD ROOM</button>
    </div>
  )
}
