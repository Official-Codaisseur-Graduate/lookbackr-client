import React from 'react'
import '../stylingComponents.css'

export default function LoginForm(props) {
  const { onChange, onSubmit, values } = props
  
  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
        </div>
        <input name={'name'} onChange={onChange} value={values.name} placeholder='username' className='input' required/>
        <div>
          <button type='submit' className='button'>Add</button>
        </div>
      </form>
    </div>
  )
}