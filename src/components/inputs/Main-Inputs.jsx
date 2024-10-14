import React from 'react';

function Inputs(props) {
  return (
    <div className='user-input'>
      <label htmlFor={props.id}>{props.label}</label>
      <input 
        className='sign-up-form'
        type={props.type} 
        name={props.name} 
        id={props.id} 
        value={props.value} 
        placeholder={props.placeholder}
        onChange={props.change}
      />
    </div>
  );
}

export default Inputs;
