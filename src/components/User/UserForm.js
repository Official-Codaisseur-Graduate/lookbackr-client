import React from 'react'
import '../stylingComponents.css'

export default function LoginForm(props) {
  const { onChange, onSubmit, values} = props
  
  return (
    <div className='formSpace'>
      <form onSubmit={onSubmit}>
      <div>
          <label>USERNAME</label>
          </div>
            <input name={'name'} onChange={onChange} value={values.name} placeholder='username'/>
          <div>
          <button type='submit'>ADD</button>
        </div>
      </form>
    </div>
  )
}