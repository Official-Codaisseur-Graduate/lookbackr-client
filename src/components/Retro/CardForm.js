import React from 'react'

export default function CardForm(props) {
    return (
        <div >
            <form id='createCard' onSubmit={props.onSubmit} onChange={props.onChange}>
                <label>Type
                <select value={props.values.type} name='type' onChange={props.onChange} className='input' required>
                    <option value=""> </option>
                        {props.options.map((option, index) => <option value={option} key={index} id={index}>{option}</option>)}
                    </select>
                </label>
                <label>Text
                <input type='text' name='text' value={props.values.text} onChange={props.onChange} className='input' required /></label>
                <button type='submit' className='button'>Add</button>
            </form>
        </div>
    )
}