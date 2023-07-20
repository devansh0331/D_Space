import React from 'react'
import PCard from './PCard'

import "./Projects.css"

import addnote from "../../../img/addnote.png"
import qrGen from "../../../img/qrGen.png"

function Projects() {
    return (
        <div className='projects'>
            <div className='animate__animated animate__fadeInDown heading'>Projects!</div>
            <div className='p-left'>
                <div className='animate__animated animate__backInLeft p-left-detail'>
                    <span className='sub-heading'>MERN Stack</span>
                    <div className='animate__animated animate__backInLeft  p-cards'>
                        <div>
                           <a href="https://mern-add-note.web.app/" rel="noreferrer" target='_blank'> <PCard link="https://github.com/devansh0331/MERN-AddNote.git" technologies="React.js, Node.js, MongoDB" image={addnote} title="Add Note"/></a>
                        </div>
                        <div>
                            <a href="https://qr-generator-92811c.netlify.app/" rel="noreferrer" target='_blank'><PCard link="https://github.com/devansh0331/ERN-QR_Generator.git" technologies="React.js, Node.js" image={qrGen} title="QR Generator"/></a>
                        </div>
                        

                    </div>
                </div>
                <div className='animate__animated animate__backInLeft p-left-detail'>
                    <span className='sub-heading'>Contributions</span>
                    <div className='animate__animated animate__backInLeft  p-cards'>
                        <div>
                           <a href="https://tedxbitd.com/" rel="noreferrer" target='_blank'> <PCard technologies="React.js, Firebase" title="TedxBITD"/></a>
                        </div>
                        
                        

                    </div>
                </div>
                <div className='animate__animated animate__backInLeft  p-left-detail'>
                    <span className='sub-heading'>APIs</span>
                    <div className='animate__animated animate__backInLeft  p-cards'>
                        <div>
                           <a href="https://github.com/devansh0331/Next13-Exp.git" rel="noreferrer" target='_blank'> <PCard link="https://github.com/devansh0331/Next13-Exp.git" technologies="Next13" title="Next13 "/></a>
                        </div>
                        <div>
                            <a href="https://dishes-and-recipies.web.app/" rel="noreferrer" target='_blank'><PCard link="https://github.com/devansh0331/React-DishesAndRecipies.git" technologies="React.js" title="Recipies"/></a>
                        </div>
                        <div>
                            <a href="https://current-weather-560ed.web.app/" rel="noreferrer" target='_blank'><PCard link="https://github.com/devansh0331/React-WeatherNOW.git" technologies="React.js" title="Weather NOW"/></a>
                        </div>
                        <div>
                            <a href="https://github.com/devansh0331/React-NewsMonk.git" rel="noreferrer" target='_blank'><PCard link="https://github.com/devansh0331/React-NewsMonk.git" technologies="React.js" title="NewsMonk"/></a>
                        </div>
                        

                    </div>
                </div>
                <div className='p-left-detail'>
                    <span className='sub-heading'>UI + DB</span>
                    <div className='animate__animated animate__backInLeft  p-cards'>
                        <div>
                           <a href="https://ecommerce-web-1c8c4.web.app/" rel="noreferrer" target='_blank'> <PCard link="https://github.com/devansh0331/AntiDote.git" technologies="React.js, Firebase" title="AntiDote "/></a>
                        </div>
                        </div>
                </div>
                <div className='p-left-detail'>
                    <span className='sub-heading'>Web Dev GAME</span>
                    <div className='animate__animated animate__backInLeft  p-cards'>
                        <div>
                           <a href="https://devansh0331.github.io/TicTacToe/" rel="noreferrer" target='_blank'> <PCard link="https://github.com/devansh0331/TicTacToe.git" technologies="HTML, CSS, JS" title="TicTacToe "/></a>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
