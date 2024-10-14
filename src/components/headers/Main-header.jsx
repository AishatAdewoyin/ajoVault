import React from 'react'

function Mainheader(prop) {
  return (
    <div className={prop.class}>
      <h1>{prop.headertext}</h1>
    </div>
  )
}

export default Mainheader;