import React from 'react'

function Paragraph(props) {
  return (
    <div className={props.class}>
        <p>{props.ParagraphText}</p>
    </div>
  )
}

export default Paragraph;