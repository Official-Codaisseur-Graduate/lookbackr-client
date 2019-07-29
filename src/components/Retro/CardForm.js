import React from 'react'
export default function CardForm(props) {
  return (
    <div >
      {!props.visibilityForm &&
        <button onClick={props.toggleVisibility} className='button'>Add Cards</button>
      }
      {props.visibilityForm &&
        <div>
          <button onClick={props.toggleVisibility} className='button'>Hide the form</button>
          <form id='createCard' onSubmit={props.onSubmit} onChange={props.onChange} className='form'>
            <label>Type</label>
            <select value={props.values.type} name='type' onChange={props.onChange} className='input' required>
              <option value=""> </option>
              {props.options.map((option, index) => <option value={option} key={index} id={index}>{option}</option>)}
            </select>
            <label>Text</label>
            <input type='text' name='text' value={props.values.text} onChange={props.onChange} className='input' required />
            <button type='submit' className='button'>Add</button>
          </form>
        </div>
      }
    </div>
  )
}