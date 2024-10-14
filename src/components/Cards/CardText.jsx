import React from 'react'
import SmallHeaders from '../headers/headers/SmallHeaders'
import Paragraph from '../paragraphs'


function CardText(props) {
  return (
    <div className="text">
    <SmallHeaders headerText={props.header}/>
    <Paragraph ParagraphText={props.ParagraphText}/>
    </div>
  )
}

export default CardText