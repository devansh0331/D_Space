import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import Learning from './pages/learnings/Learning'
import Projects from './pages/projects/Projects'
import Blogs from './pages/blogs/Blogs'
import About from './pages/about/About'
import Intro from './pages/intro/Intro'

import "./Main.css"

function Main() {
  const [bool, setbool] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setbool(true)
    }, 500);
  }, [])
  
  return (
    <div className='Main'>
    <Router>
      {bool ? <Navbar/> : <div className='Main'>
        .
      </div> }
      <Routes>
        <Route exact path='/learnings' element={<Learning/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Intro/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default Main
