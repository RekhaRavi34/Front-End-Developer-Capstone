import React from 'react'
import logo from '../assets/boxyellow.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{backgroundColor:"#333333",}}>
    <div className="footercontainer"> 
     <div className="footerlogobox"> 
      <img src={logo} className='footerimage'/>
     </div>
      <div className="doormatbox">
      <h5>Doormat Navigation</h5>
       <ul className="linkcontainer">
       <li><Link className="ancho" to='/'>Home</Link></li>
            <li ><Link className="ancho" to='/about'>About</Link></li>
            <li><Link className="ancho" to='/menu'>Menu</Link></li>
            <li><Link className="ancho" to='/reserve'>Reservations</Link></li>
            <li><Link className="ancho" to='/orderonline'>Order Online</Link></li>
            <li><Link className="ancho" to='/login'>Login</Link></li>
        </ul>
      </div>
       <div className="contactbox">
       <h5>Contact</h5>
       <ul className="linkcontainer">
            <li><a href="index.html">Address</a></li>
            <li><a href="#">Phone number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
       </div>
        <div className="socialbox">
        <h5>Social Media Links</h5>
       <ul className="linkcontainer">
            <li><a href="index.html">Address</a></li>
            <li><a href="#">Phone number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer