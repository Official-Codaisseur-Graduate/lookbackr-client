import React from 'react'
export default function CardForm(props) {
  return (
    <div >

      {props.visibilityForm &&
        <div>
          <button onClick={props.toggleVisibility} className='button'>Hide the form</button>
          <div className='form'>
          <form id='createCard' onSubmit={props.onSubmit} onChange={props.onChange}>
            <div className='form-lines'>
            <select value={props.values.type} name='type' onChange={props.onChange} className='input' required>
              <option value=""> Choose the type</option>
              {props.options.map((option, index) => <option value={option} key={index} id={index}>{option}</option>)}
            </select>
            </div>
            <div className='form-lines'>
            <textarea type='text' name='text' value={props.values.text} onChange={props.onChange} placeholder='Why are you feeling this way?' className='input' required />
            </div>
            <div className='form-lines'>
              <button type='submit' className='button'>Add</button>
            </div>
          </form>
          </div>
        </div>
      }
      {!props.visibilityForm &&
      <button onClick={props.toggleVisibility} className='button'>1 - Add cards</button>
      }
    </div>
  )
}