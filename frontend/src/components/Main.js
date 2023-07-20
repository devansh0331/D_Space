import React from 'react'
import Navbar from './navbar/Navbar'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import Learning from './pages/learnings/Learning'
import Projects from './pages/projects/Projects'
import Blogs from './pages/blogs/Blogs'

function Main() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Learning/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/blogs' element={<Blogs/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default Main
