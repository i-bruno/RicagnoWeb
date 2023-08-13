import React from 'react'
import "./Obras.css"

const Obras = (props) => {
  return (
    <div>
      <img src={props.img} alt="obras de arte" className='imgObras img-thumbnail img-fluid rounded mx-auto d-block'/>
    </div>
  )
}

export default Obras