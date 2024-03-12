import React from 'react'
import logo from '../assets/boxyellow.png'

function Footer() {
  return (
    <footer style={{backgroundColor:"#333333"}}>
    <div class="footercontainer"> 
     <div class="footerlogobox"> 
      <img src={logo} className='footerimage'/>
     </div>
      <div class="doormatbox">
      <h5>Doormat Navigation</h5>
       <ul class="linkcontainer">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Order Online</a></li>
        </ul>
      </div>
       <div class="contactbox">
       <h5>Contact</h5>
       <ul class="linkcontainer">
            <li><a href="index.html">Address</a></li>
            <li><a href="#">Phone number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
       </div>
        <div class="socialbox">
        <h5>Social Media Links</h5>
       <ul class="linkcontainer">
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