import React from 'react'
import '../stylingComponents.css'

export default function LobbyForm(props) {
  const { onChange, onSubmit, values} = props
  
  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
      <div>
          <label>NAME</label>
          </div>
            <input name={'name'} onChange={onChange} value={values.name} placeholder='name of room'/>
          <div>
          <label>DESCRIPTION</label>
          </div>
            <input name={'description'} onChange={onChange} value={values.description} placeholder='description'/>
          <div>
          <button type='submit' >ADD</button>
        </div>
      </form>
    </div>
  )
}