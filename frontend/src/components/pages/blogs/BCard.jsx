import React from 'react'
import "./BCard.css"

function BCard(props) {
  return (
    <div className='b-card'>
        <span>{props.title}</span>
      
    </div>
  )
}

export default BCard
