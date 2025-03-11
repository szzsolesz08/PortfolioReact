function Contact() {
    return (
        <section className="contact-section">
            <div class="contact-container">
                <div class="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                    
                    <div class="social-links">
                        <a href="https://github.com/szzsolesz08" target="_blank" class="social-link">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/zsolt-szabo08/" target="_blank" class="social-link">
                            <i class="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:szzsolesz008@gmail.com" class="social-link">
                            <i class="fas fa-envelope"></i>
                            <span>Email</span>
                        </a>
                    </div>
                </div>

                <form class="contact-form" action="https://formspree.io/f/meooylyb" method="POST">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="_replyto" required/>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="_subject" required/>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;