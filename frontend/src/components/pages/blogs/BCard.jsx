import React from 'react'
import "./BCard.css"

function BCard(props) {
  return (
    <div className='b-card'>
        <span style={{ color: 'white'}}>{props.title}</span>
      
    </div>
  )
}

export default BCard
