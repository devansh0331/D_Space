import React, { useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Learnings.css"
// import {Puff} from 'react-loader-spinner'


function Learning() {
    // const [loading, setLoading] = useState(true)
    return (
        <div className='projects'>
            <div className='animate__animated animate__fadeInDown heading'>LEARNINGS!</div>
            {/* {loading && <div style={{width:'100%' , margin:'1rem auto' , textAlign:'center'}}> <Puff
  height="80"
  width="80"
  radius={1}
  color="#cc5fff"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/></div>} */}
            <div className='p-left'>
                <div className='animate__animated animate__backInLeft p-left-detail'>
                    <span className='sub-heading'>Web Development</span>
                    <div className='animate__animated animate__backInLeft'>
                   
                        <div className='l-div'>
                            <span>Tutorial</span>
                            <div className='p-cards l-cards'>

                                <div>
                                    <iframe  src="https://youtube.com/embed/6mbwJ2xhgzM" frameborder="0" allowfullscreen></iframe>
                                </div>
                                <div>
                                    <iframe  src="https://youtube.com/embed/ANzPM5-lwXc" frameborder="0" allowfullscreen></iframe>
                                </div>
                                {/* <div>
                        <iframe  src="https://youtube.com/embed/ANzPM5-lwXc" frameborder="0" allowfullscreen></iframe>
                    </div> */}
                            </div>
                            <span>Resources</span>
                            <div className="l-res">
                                <span>Geeks for Geeks <a href="https://www.geeksforgeeks.org/"><FaExternalLinkAlt /></a></span>
                                <span>W3Schools <a href="https://www.w3schools.com/"><FaExternalLinkAlt /></a></span>
                            </div>
                        </div>



                    </div>
                </div>
                <div className='animate__animated animate__backInLeft  p-left-detail'>
                    <span className='sub-heading'>React.js</span>
                    <div className='animate__animated animate__backInLeft '>

                        <div className='l-div'>
                            <span>Tutorial</span>
                            <div className='p-cards l-cards'>

                                <div>
                                    <iframe  src="https://youtube.com/embed/-mJFZp84TIY" frameborder="0" allowfullscreen></iframe>
                                </div>
                                {/* <div>
                                    <iframe  src="https://youtube.com/embed/ANzPM5-lwXc" frameborder="0" allowfullscreen></iframe>
                                </div> */}
                                {/* <div>
        <iframe  src="https://youtube.com/embed/ANzPM5-lwXc" frameborder="0" allowfullscreen></iframe>
    </div> */}
                            </div>
                            <span>Resources</span>
                            <div className="l-res">
                                <span>React.js <a href="https://legacy.reactjs.org/"><FaExternalLinkAlt /></a></span>
                                <span>React.js Dev <a href="https://react.dev/"><FaExternalLinkAlt /></a></span>
                                <span>45 Projects for Beginers <a href="https://contactmentor.com/best-react-projects-for-beginners-easy/"><FaExternalLinkAlt /></a></span>
                                <span>Universe.io <a href="https://uiverse.io/"><FaExternalLinkAlt /></a></span>
                                <span>React Animations <a href="https://animate.style/"><FaExternalLinkAlt /></a></span>
                            </div>
                        </div>



                    </div>
                </div>
                <div className='animate__animated animate__backInLeft  p-left-detail'>
                    <span className='sub-heading'>MERN</span>
                    <div className='animate__animated animate__backInLeft '>

                        <div className='l-div'>
                            <span>Tutorial</span>
                            <div className='p-cards l-cards'>

                                <div>
                                    <iframe  src="https://youtube.com/embed/THnLOll4wsU" frameborder="0" allowfullscreen></iframe>
                                </div>
                                <div>
                                    <iframe  src="https://www.youtube.com/embed/live/7WEJpNBuHUQ?feature=share" frameborder="0" allowfullscreen></iframe>
                                </div>
                                <div>
                                    <iframe  src="https://youtube.com/embed/tDjTun-_ZTU" frameborder="0" allowfullscreen></iframe>
                                </div>
                                {/* <div>
        <iframe  src="https://youtube.com/embed/ANzPM5-lwXc" frameborder="0" allowfullscreen></iframe>
    </div> */}
                            </div>
                            <span>Resources</span>
                            <div className="l-res">
                                <span>NPM <a href="https://www.npmjs.com/"><FaExternalLinkAlt /></a></span>
                                {/* <span>React.js Dev <a href="https://react.dev/"><FaExternalLinkAlt /></a></span>
                                <span>45 Projects for Beginers <a href="https://contactmentor.com/best-react-projects-for-beginners-easy/"><FaExternalLinkAlt /></a></span>
                                <span>Universe.io <a href="https://uiverse.io/"><FaExternalLinkAlt /></a></span>
                                <span>React Animations <a href="https://animate.style/"><FaExternalLinkAlt /></a></span> */}
                            </div>
                        </div>



                    </div>
                </div>
                <div className='animate__animated animate__backInLeft  p-left-detail'>
                    <span className='sub-heading'>Python</span>
                    <div className='animate__animated animate__backInLeft '>

                        <div className='l-div'>
                            <span>Tutorial</span>
                            <div className='p-cards l-cards'>

                                <div>
                                    <iframe  src="https://youtube.com/embed/aqvDTCpNRek" frameborder="0" allowfullscreen></iframe>
                                </div>
                                <div>
                                    <iframe  src="https://youtube.com/embed/_JWUPnq2g-8" frameborder="0" allowfullscreen></iframe>
                                </div>
                               
                              
                            </div>
                            <span>Resources</span>
                            <div className="l-res">
                                <span>Python <a href="https://www.python.org/"><FaExternalLinkAlt /></a></span>
                                <span>PyCharm <a href="https://www.jetbrains.com/pycharm/"><FaExternalLinkAlt /></a></span>
                               
                            </div>
                        </div>



                    </div>
                </div>
                <div className='animate__animated animate__backInLeft  p-left-detail'>
                    <span className='sub-heading'>Java+DSA</span>
                    <div className='animate__animated animate__backInLeft '>

                        <div className='l-div'>
                            <span>Tutorial</span>
                            <div className='p-cards l-cards'>

                                <div>
                                    <iframe  src="https://youtube.com/embed/ntLJmHOJ0ME" frameborder="0" allowfullscreen></iframe>
                                </div>
                                <div>
                                    <iframe  src="https://youtube.com/embed/rZ41y93P2Qo" frameborder="0" allowfullscreen></iframe>
                                </div>
                               
                              
                            </div>
                            <span>Resources</span>
                            <div className="l-res">
                                <span>Kunal Kushwaha <a href="https://github.com/kunal-kushwaha/DSA-Bootcamp-Java"><FaExternalLinkAlt /></a></span>
                                <span>LeetCode <a href="https://leetcode.com/"><FaExternalLinkAlt /></a></span>
                                <span>CodeChief <a href="https://www.codechef.com/"><FaExternalLinkAlt /></a></span>
                               
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Learning
