import React from 'react'
import './styles.scss';

function Footer() {
    return (
        <div className="Footer">
            <h2 className="Footer__title">Join the Adventure newsletter to receive our best vacation deals</h2>
            <p>You can unsubscribe at any time.</p>
            <form>
                <input className="Footer__gmail" type='email' placeholder="Your email" />
                <input className="Footer__submit" type='submit' value="Subscribe" />
            </form>
            <div className="Footer__info">
                <div className="Footer__info--item">
                    <h2>About Us</h2>
                    <ul>
                        <li>How it works</li>
                        <li>Testimonials</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="Footer__info--item">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>How it works</li>
                        <li>Testimonials</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="Footer__info--item">
                    <h2>Videos</h2>
                    <ul>
                        <li>How it works</li>
                        <li>Testimonials</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="Footer__info--item">
                    <h2>Social Media</h2>
                    <ul>
                        <li>How it works</li>
                        <li>Testimonials</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>

            <div className="Footer__icon">
                <div className="Footer__icon--logo">TRVL <i className="fab fa-typo3"></i></div>
                <p>TRVL <i class="far fa-copyright">2021</i></p>
                <div className="Footer__icon--MXH">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
