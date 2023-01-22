import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Arturo Ortueta</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/DevArturoOrtueta" className="footer__social-link" target="_blank">
                        <i className="uil uil-github"></i>
                    </a>
                    <a href="https://dribbble.com/Artudoxo/shots" className="footer__social-link" target="_blank">
                        <i className="uil uil-dribbble"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/arturo-ortueta-calderon-0782311ba/" className="footer__social-link" target="_blank">
                        <i className="uil uil-linkedin"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Arturo Ortueta. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer