import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Contact() {
    useScrollAnimation();

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-info animate-on-scroll fade-in-left">
                    <h2>Get in Touch</h2>
                    <p>Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                    
                    <div className="social-links stagger-children">
                        <a href="https://github.com/szzsolesz08" target="_blank" className="social-link" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/zsolt-szabo08/" target="_blank" className="social-link" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:szzsolesz008@gmail.com" className="social-link">
                            <i className="fas fa-envelope"></i>
                            <span>Email</span>
                        </a>
                    </div>
                </div>

                <form className="contact-form animate-on-scroll fade-in-right" action="https://formspree.io/f/meooylyb" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="_replyto" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="_subject" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;