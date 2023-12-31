import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServicesItem = (props) => {
  return (
    <div className='box'> 
      <FontAwesomeIcon icon={props.icon} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default ServicesItem
