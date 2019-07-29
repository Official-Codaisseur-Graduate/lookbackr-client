import React from 'react'
import '../stylingComponents.css'

export default function LobbyForm(props) {
  const { onChange, onSubmit, values} = props
  
  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
        </div>
          <input name={'name'} onChange={onChange} value={values.name} placeholder='name of room' className='input' required/>
        <div>
          <label>Description</label>
        </div>
          <input name={'description'} onChange={onChange} value={values.description} placeholder='description' className='input' required/>
        <div>
          <button type='submit' className='button'>Add</button>
        </div>
      </form>
    </div>
  )
}