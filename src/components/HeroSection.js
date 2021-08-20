import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';



function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mpr" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns"></div>
                <Button 
                    className="btns" 
                    buttonSyle="btn--outline"
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button 
                    className="btns" 
                    buttonSyle="btn--primary"
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>

        </div>
    )
}

export default HeroSection
