import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false); {/*sets the initial value of the states */}
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); {/*changes the status of the nav icon*/}
    const closeMobileMenu = () => setClick(false); {/*to close the menu when clicked */}
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    //to Render it one time so the Sign up button won't appear after reloading in smaller window size
    useEffect(() =>{
        showButton()
    }, [])

    window.addEventListener('resize', showButton);



    return (
        <>
            <nav className="navbar">
                <div className = "navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
