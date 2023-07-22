import React, { useState } from 'react'

import  { FaDownload } from "react-icons/fa"
import Resume from "../../../img/DevanshResume.pdf"
import "./Contact.css"
import ContactImg from "../../../img/contact2.png"
import {Puff} from 'react-loader-spinner'
function Contact() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [purpose, setpurpose] = useState('')
  const [succmsg, setSuccmsg] = useState('')
  const [errmsg, setErrmsg] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleSend = async (e) => {
    e.preventDefault()
    setLoading(true)
    let bodyData = {email , name , purpose, contact}
    console.log(email + " " + name + " " + purpose + " " + contact);
        const data = await fetch('https://d-space.onrender.com/sendMail' , {
            method : 'POST',
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(bodyData)
        })

        const parsedData = await data.json()
        setLoading(false)
        if (parsedData.status == 400) {
          setErrmsg(parsedData.mssg)
        }
        else{
          setSuccmsg(parsedData.mssg)
        }
        console.log(parsedData.mssg);

  } 

  return (
    <div className='contact'>
     <div className='animate__animated animate__zoomInLeft c-left'>
        <img src={ContactImg} alt="" />
     </div>
     <div className="animate__animated animate__zoomInRight c-right">
        <span className='heading'>Contact Me!</span>
        <p>Get the instant Reply!</p>
     <div className="input-container">
            <input placeholder="Full Name*" value={name} onChange={e => setname(e.target.value)} className="input-field" type="text"/>
            <label for="input-field" className="input-label">Full Name*</label>
        <span className="input-highlight"></span>
    </div>
     <div className="input-container">
            <input placeholder="Email*" value={email} onChange={e => setemail(e.target.value)}  className="input-field" type="email"/>
            <label for="input-field" className="input-label">Email*</label>
        <span className="input-highlight"></span>
    </div>
     <div className="input-container">
            <input placeholder="Contact*" value={contact} onChange={e => setcontact(e.target.value)}  className="input-field" type="text"/>
            <label for="input-field" className="input-label">Contact*</label>
        <span className="input-highlight"></span>
    </div>
     <div className="input-container">
            <select value={purpose} onChange={e => setpurpose(e.target.value)}  placeholder="Purpose" className="input-field" type="dropdown">
                    <option value="hireme">Hire ME</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="worktogether">Let's Work Together</option>
                    <option value="other">Other</option>
            </select>
                <label for="input-field" className="input-label">Purpose*</label>
        <span className="input-highlight"></span>
    </div>
    
    <div className='btns'>
     <button onClick={handleSend}>SEND</button>
     <button><a href={Resume} style={{color:'#cc5fff', textDecoration:'none'}} download>Resume <FaDownload/></a></button>

    </div>
  {loading &&  <Puff
  height="40"
  width="40"
  radius={1}
  color="#cc5fff"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>}
    {succmsg && <p style={{color : '#90EE90'}}>{succmsg}</p>}
    {errmsg && <p style={{color:'red'}}>{errmsg}</p>}
    
     </div>
    </div>
  )
}

export default Contact
