import React from 'react'
import './Composition.css'
export default function Composition(props) {
  return (
    <div>
      <div className='composition_container'>
        {props.children}
      </div>
    </div>
  )
}
