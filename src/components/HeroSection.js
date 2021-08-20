import React from 'react'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mpr" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns"></div>
                <Button className="btns" buttonSyle="btn--outline"></Button>

        </div>
    )
}

export default HeroSection
