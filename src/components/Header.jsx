import React from 'react'
import heading1 from "../assets/heading1.png"

function Header() {
  return (
    <>
      <header>
        <img src={heading1} style={{ width: "12rem", height: "3rem" }} />
        <nav style={{margin:"1rem"}}>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li ><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
