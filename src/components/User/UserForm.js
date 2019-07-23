import React from 'react'
import '../stylingComponents.css'

export default function LoginForm(props) {
  const { onChange, onSubmit, values, goToLobby} = props
  
  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
      <div>
          <label>NAME</label>
          </div>
            <input name={'name'} onChange={onChange} value={values.name} placeholder='username'/>
          <div>
          <button type='submit' onClick={goToLobby}>ADD</button>
        </div>
      </form>
    </div>
  )
}