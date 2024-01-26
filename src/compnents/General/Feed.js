import React from 'react'
import Body from './Body'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Feed() {
  return (
    <div style={{backgroundColor:"#f5f5f5"}}>
    <div className='header'>
      {/* <Nav/> */}
    </div>
    <div className="container">
    <Link to='/'>Login</Link>
      {/* Nav */}
      {/* body */}
      <Body/>
    </div>
    
    </div>
  )
}

export default Feed