import React, { useState } from 'react'
import './NavbarSawa.css'
import logo from './../../assets/Logo-sawa.png';
import { Link } from 'react-router-dom'
import sidebarimage from "./../../assets/sidebar1.png"
import { motion } from 'framer-motion';
function NavbarSawa() {
    const [sidebarActive, setSidebarActive] = useState(false);
    function handleSidebar() {
        setSidebarActive(!sidebarActive);
    }
    return (
        <div className='nav-sawa'>
            <div className="container">
                <nav className='nav-container '>
                    
                    <ul className='nav-ul d-flex justify-content-evenly gap-5'>
                        <li>
                            <Link to="/" >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link> 
                        </li>
                        <li>
                            <Link to="/services">
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact Us
                            </Link> 
                        </li>
                        
                    </ul>

                </nav>
            </div>
            <div className="sidebar-container">
                        <div onClick={handleSidebar} className='sidebar-icon' >
                            <img src={sidebarimage} alt="hamburgar" />
                        </div>
                        {/* {sidebarActive &&( */}
                        <motion.nav className='sidebar-nav'
                            initial={{ x:-300}}
                            animate={{ x : sidebarActive ? 0 : -300}}
                            transition={{duration : 0.5}}
                        >
                            <ul className='sidebar-nav-ul'>
                                <li>
                                    <Link to="/"  onClick={handleSidebar} >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" onClick={handleSidebar} >
                                        About
                                    </Link> 
                                </li>
                                <li>
                                    <Link to="/services" onClick={handleSidebar} >
                                        Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={handleSidebar}>
                                        Contact Us
                                    </Link> 
                                </li>
                            </ul>
                            <div className="nav-logo">
                                <img src={logo} alt="logo" />
                                <h1>SAWA GROUP</h1>
                            </div>
                        </motion.nav>
                    {/* )} */}
                    </div>
        </div>
    )
}

export default NavbarSawa