import React from 'react'

import "./ACard.css"

import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

import about from "../../../img/about.png"

function ACard(props) {
  return (
    <div className='a-card'>
      <span><img src={about} alt="testimonial" /></span>
      <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio ut, nemo aliquam ratione, laborum dignissimos, nostrum delectus tenetur quam magni placeat quisquam aliquid pariatur rerum? Aut quas explicabo, dicta laborum, ex assumenda hic architecto unde facilis placeat, aliquid accusantium temporibus? At exercitationem iste eligendi cumque, accusamus laboriosam ut laborum."</p>
      <div className='a-card-footer'>
      <p style={{color:"rgb(151 112 169)"}}>- <strong>John Deo</strong> 
            <br/>
            Designation
            <br/>
            <a id='testi-socials' href="/about" style={{color:"rgb(151 112 169)" , textDecoration:"none"}}>
                <FaInstagram/>
            </a> &nbsp;
            <a id='testi-socials' href="/about" style={{color:"rgb(151 112 169)" , textDecoration:"none"}}>
                <FaLinkedinIn/>
            </a> &nbsp;
            <a id='testi-socials' href="/about" style={{color:"rgb(151 112 169)" , textDecoration:"none"}}>
                <FaTwitter/>

            </a> 
        </p>

      </div>

    </div>
  )
}

export default ACard
