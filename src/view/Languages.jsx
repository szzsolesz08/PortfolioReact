import React from 'react';
import { languages } from '../assets/data/Languages';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Languages() {
    useScrollAnimation();

    return (
        <section className="languages-section" id="tech-stack">
            <h2 className="animate-on-scroll">Skills & Technologies</h2>
            <div className="languages-container">
                <div className="languages-grid stagger-children animate-on-scroll">
                    {languages.map((lang, index) => (
                        <div key={index} className="language-card">
                            <i className={`${lang.icon} language-icon`}></i>
                            <h3 className="language-name">{lang.name}</h3>
                            <p className="language-level">{lang.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Languages;