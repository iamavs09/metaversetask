import React from 'react';
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="left">
            <div className="logo"></div>
            <div className="name">fordian</div>
        </div>
        <div className="right">
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Avatar</a></li>
                <li><a href="/#">Market Place</a></li>
                <li><a href="/#">Events</a></li>
                <li><a href="/#">Publish</a></li>
                <li><a href="/#">Blog</a></li>
                <button>
                    <div className="mask"></div>
                    <p>Brunno</p>
                    <div className="dots"></div>
                </button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar