import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false); {/*sets the initial value of the states */}

    const handleClick = () => setClick(!click); {/*changes the status of the nav icon*/}

    const closeMobileMenu = () => setClick(false); {/*to close the menu when clicked */}

    return (
        <>
            <nav className="navbar">
                <div className = "navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}> 
                        <i className ={click ? 'fas fa-times' : 'fas fa-bars'} /> {/* used condition to changed classes when clicked*/}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className="nav-links" 
                                onClick={closeMobileMenu}> 
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/services" 
                                className="nav-links" 
                                onClick={closeMobileMenu}> 
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/products" 
                                className="nav-links" 
                                onClick={closeMobileMenu}> 
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/sign-up" 
                                className="nav-links-mobile" 
                                onClick={closeMobileMenu}> 
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
