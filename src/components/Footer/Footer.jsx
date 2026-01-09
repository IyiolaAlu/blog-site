import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <h3 className="brand-logo">DevJourney</h3>
                        <p className="brand-description">
                            Documenting my coding journey learning React, Node.js, and full-stack development. 
                            Sharing experiences, tutorials, and project builds.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link">GitHub</a>
                            <a href="#" className="social-link">Twitter</a>
                            <a href="#" className="social-link">LinkedIn</a>
                            <a href="#" className="social-link">YouTube</a>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="footer-links">
                        <div className="link-column">
                            <h4 className="column-title">Blog</h4>
                            <a href="#" className="footer-link">Home</a>
                            <a href="#" className="footer-link">All Posts</a>
                            <a href="#" className="footer-link">Tutorials</a>
                            <a href="#" className="footer-link">Projects</a>
                        </div>

                        <div className="link-column">
                            <h4 className="column-title">Categories</h4>
                            <a href="#" className="footer-link">React</a>
                            <a href="#" className="footer-link">Node.js</a>
                            <a href="#" className="footer-link">JavaScript</a>
                            <a href="#" className="footer-link">Web Development</a>
                        </div>

                        <div className="link-column">
                            <h4 className="column-title">Resources</h4>
                            <a href="#" className="footer-link">Learning Path</a>
                            <a href="#" className="footer-link">Code Snippets</a>
                            <a href="#" className="footer-link">Tools I Use</a>
                            <a href="#" className="footer-link">Book Recommendations</a>
                        </div>

                        <div className="link-column">
                            <h4 className="column-title">About</h4>
                            <a href="#" className="footer-link">My Story</a>
                            <a href="#" className="footer-link">Contact</a>
                            <a href="#" className="footer-link">Newsletter</a>
                            <a href="#" className="footer-link">Support</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © 2024 DevJourney Blog. All rights reserved.
                        </p>
                        <div className="legal-links">
                            <a href="#" className="legal-link">Privacy Policy</a>
                            <a href="#" className="legal-link">Terms of Service</a>
                            <a href="#" className="legal-link">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer