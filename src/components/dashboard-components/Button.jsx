import React from 'react'

const Button = ({ link, text, color, textColor, width }) => {
 return (
  <a href={link}>
   <button
    type="submit"
    style={{
     marginTop: '20px',
     padding: '10px',
     border: '1px',
     borderRadius: '5px',
     color: textColor,
     borderBlockColor: '#5A47CF',
     background: color,
     width: width,
    }}
   >
    {text}
   </button>
  </a>
 );
}

export default Button