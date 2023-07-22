import React, { useState } from 'react'
import { Puff } from 'react-loader-spinner'
import "./Intro.css"
import { useNavigate } from 'react-router-dom'

function Intro() {

    // const []
    const navigate = useNavigate()
    const [out, setout] = useState(false)
    const handleOnClick = () => {
        setout(!out)
        setTimeout(() => {
            navigate('../about')
            
        }, 750);

    }
    return (
        <div className={`animate__animated ${out ? 'animate__fadeOut' : 'animate__slideInDown'}  banner b-open`}>
            <div className='sub-intro'>Hello I am!</div>
            <div className='intro'>DEVANSH SHRIVASTAVA</div>
            <h1 style={{color:"#cc5fff"}}>"Welcome to <strong>DSpace</strong>"</h1>
            <p style={{fontWeight:"bold"}}>Click below to continue...</p>
            <div id="onClick" onClick={handleOnClick}>

                <Puff
                    height="80"
                    width="80"
                    radius={1}
                    color="#cc5fff"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}

                />
            </div>
        </div>
    )
}

export default Intro
