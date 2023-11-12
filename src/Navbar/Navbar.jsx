import React from 'react'
import "./Navbar.css";
function Navbar() {
    return (
        <>
        <div className='top'>
            <span>Get these stunners</span> 
            <div style={{ background: 'red' }}>SHIPPED IN 48HRS</div>
        </div>
        <div className='nav-link'>
            <div>MY KALYAN / MEDIA / KALYAN NEWS / GOLD RATES / DIGITAL GOLD</div>
            <div>STORE LOCATOR / FEEDBACK / CONTACT / 
                    <img src="icons8-facebook-30.png" alt="" />
                    <img src="icons8-instagram-50.png" alt="" />
                    <img src="icons8-twitter-circled-64.png" alt="" />
                    <img src="icons8-youtube-67.png" alt="" />
            </div>
        </div>
        <div className='nav-bar'>
            <span>OUR BRANDS</span>
            <span>MUHURAT</span>
            <span>SHOP ONLINE</span>
            <span>JEWELLERY</span>
            <img style={{width:'100px'}} src="kalyan.png" alt="Img here" />
            <span>ABOUT US</span>
            <span>GIFT CARDS</span>
            <span>AMBASSADORS</span>
            <span>INVESTOR</span>
        </div>
        </>
    )
}

export default Navbar;
