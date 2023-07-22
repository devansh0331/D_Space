import React from 'react'

import "./About.css"

import about from "../../../img/about.png"
import Slider from 'infinite-react-carousel';

import { FaCss3Alt, FaDatabase, FaGithub, FaHtml5, FaInstagram, FaJava, FaJs, FaLinkedinIn, FaNodeJs, FaPython, FaReact, FaTwitter } from "react-icons/fa6";
import ACard from './ACard';
import { AiOutlineMail } from 'react-icons/ai';

function About() {

    let cards = [
        {
            key: 1,
            content: (
                <ACard />
            )
        },
        {
            key: 2,
            content: (
                <ACard />
            )
        },
        {
            key: 3,
            content: (
                <ACard />
            )
        },
        {
            key: 4,
            content: (
                <ACard />
            )
        },
        {
            key: 5,
            content: (
                <ACard />
            )
        }
    ];

    return (
        <div className='about'>
            <span className='animate__animated animate__fadeInDown heading'>About</span>
            <div className='p-left a-left a-intro'>
                <div className='animate__animated animate__zoomInLeft p-left-detail a-left-detail a-intro-detail'>
                    <span className='sub-heading'>&lt;overview/&gt;</span>
                    <div className='l-div a-div '>
                        <span>&lt;p&gt;</span>
                        <p>As a Computer Science and Engineering student from Bhilai Institute of Technology, Durg, I am a web development enthusiast with passionate in learning new web technologies. Cuurently I am pushing up my skills in MERN Stack. A nimble and passionate learner, I embark on quests to craft captivating websites and applications that astound and inspire. When I'm not conjuring code, you'll find me on the football field, kicking goals, or delving into the mysteries of Indian Mythology.🌟</p>
                        <span>&lt;/p&gt;</span>
                    </div>
                </div>
                <div className='animate__animated animate__zoomInRight a-right '>
                    <img src={about} alt="About" />
                </div>
            </div>
            <hr />
            <div className='p-left a-left a-skills-start'>
                <div className='animate__animated animate__zoomInLeft p-left-detail a-left-detail '>
                    <span className='sub-heading'>&lt;skills/&gt;</span>
                    <div className='l-div a-div a-skills' >
                        <div className='floating'>

                            <FaReact />
                        </div>
                        <div className='floating'>
                            <FaJava />
                        </div>
                        <div className='floating'>
                            <FaHtml5 />
                        </div>
                        <div className='floating'>
                            <FaCss3Alt />
                        </div>
                        <div className='floating'>
                            <FaJs />
                        </div>
                        <div className='floating'>
                            <FaNodeJs />
                        </div>
                        {/* <TbBrandMongodb/> */}
                        <div className='floating'>
                            <FaPython />
                        </div>
                        <div className='floating'>
                            <FaDatabase />
                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <div className='p-left a-left'>
                <div className='animate__animated animate__zoomInLeft p-left-detail a-left-detail '>
                    <span className='sub-heading '>&lt;testimonials/&gt;</span>
                    <div className='l-div' >
                        <span style={{ color: "#d073fc" }}>What do people say?</span>
                        <div className="a-testi" style={{ width: '80vw', padding: '0 auto' }}>
                            <Slider dots={true} autoplaySpeed={2500} arrows={false} autoplay={true} autoplayScroll={1} slidesToShow={1}>
                                <ACard />

                                <ACard />

                                <ACard />

                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='p-left a-left'>
            <div className='animate__animated animate__zoomInLeft p-left-detail a-left-detail '>
                    <span className='sub-heading '>&lt;let's-connect/&gt;</span>
                    <div className='l-div' >
                        <span style={{ color: "#d073fc" }}>Found me interesteing so far?</span>
                        <div className='mySocials'>
                            <a rel="noreferrer" target='_blank' href="https://www.instagram.com/devansh19_official/">
                        <div>

                        <FaInstagram/>
                        </div>
                            </a>
                            <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/devansh-shrivastava-94228a230/">
        <div>

                        <FaLinkedinIn/>
        </div>
                            </a>
                            <a rel="noreferrer" target='_blank' href="https://twitter.com/SomewhatDevansh">
                                <div>

                        <FaTwitter/>
                                </div>

                            </a>
                            <a rel="noreferrer" target='_blank' href="https://devanshshrivastava07@gmail.com">
<div>

                        <AiOutlineMail/>
</div>
                            </a>
                            <a rel="noreferrer" target='_blank' href="https://github.com/devansh0331">
<div>

                        <FaGithub/>
</div>
                            </a>

                        </div>
                        </div>


                        </div>
                        </div>

        </div>
    )
}

export default About
