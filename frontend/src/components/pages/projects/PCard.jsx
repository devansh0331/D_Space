import React from 'react'



import "./PCard.css"

function PCard(props) {
  return (
    <div className="container">
    <div className="box">
        <span className="title">{props.title}</span>
      { props.image ? <img src={props.image} alt=""/> : <span>Click Me!</span>}
        <div>
            {props.link && <a href={props.link}><button style={{padding:'5px' , marginTop:'.7rem'}}>GitHub</button></a>}
            <p>{props.technologies}</p>
            {/* <span>VALID</span> <span>01/28</span> */}
        </div>
    </div>
</div>
  )
}

export default PCard
