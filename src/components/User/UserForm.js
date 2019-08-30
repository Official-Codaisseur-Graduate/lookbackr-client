import React from 'react'
import '../stylingComponents.css'

export default function LoginForm(props) {
  const { onChange, onSubmit, values } = props
  
  return (
    <div>

      <div className='text-home'>You’ve done it! You and your team completed an app together. 
      <br></br>Of course you're happy that the work is done. 
      But let’s take a few minutes and look back together. <br></br>
      Figure out what went well and what didn’t so you can improve and be even better the next project.</div>
      <div className='form'>
      <form onSubmit={onSubmit}>
        <input name={'name'} onChange={onChange} value={values.name} placeholder='Fill your name' className='input' required/>
        <div>
          <button type='submit' className='button'>Enter</button>
        </div>
      </form>
    </div>
    </div>
  )
}