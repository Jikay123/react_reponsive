import React from 'react'
import './styles.scss';

function FirstLayout() {
    return (
        <div className="container">
            <video src='/videos/video-1.mp4' autoPlay loop muted />

            <h2 className="container__content--title">ADVENTURE AWAITS</h2>
            <h4 className="container__content--question">What are you waiting for?</h4>
            <div className="container__button">
                <button className="container__button--get">GET STATED</button>
                <button className="container__button--trailer">WATCH TRAILER <i className="fas fa-play-circle"></i></button>
            </div>

        </div>
    )
}

export default FirstLayout
