import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
       <span className='logos'>  <img Style={"height:25px;width:25px; margin-top:-2px;"} src="steg3.png" alt=""/>
      <span className="logo">StegHide</span>
      </span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>log out</button>
      </div>
    </div>
  )
}

export default Navbar