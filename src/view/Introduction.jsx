import React from 'react';
import profileImg from '../assets/pfp.jpg';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Introduction() {
    useScrollAnimation();

    return (
        <section className="intro-section">
            <div className="intro-container">
                <div className="intro-content animate-on-scroll fade-in-left">
                    <h1>Hi, I'm <span className="highlight">Zsolt Szabo</span></h1>
                    <div className="stagger-children">
                        <p>
                            <i className="fas fa-graduation-cap intro-icon"></i>
                            Computer Science Bachelor's Degree student.
                        </p>
                        <p>
                            <i className="fas fa-school intro-icon"></i>
                            Currently studying at the University of Eötvös Lóránd Tudományegyetem, Hungary.
                        </p>
                        <p>
                            <i className="fas fa-code intro-icon"></i>
                            I am interested in web development and software engineering.
                        </p>
                        <p>
                            <i className="fas fa-lightbulb intro-icon"></i>
                            I am always looking for new challenges and learning new things.
                        </p>
                        <p>
                            <i className="fas fa-users intro-icon"></i>
                            I am a fast learner and a team player.
                        </p>
                    </div>
                </div>
                <div className="intro-image animate-on-scroll fade-in-right">
                    <img src={profileImg} alt="Zsolt Szabo" />
                </div>
            </div>
        </section>
    );
}

export default Introduction;
