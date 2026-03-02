import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from "react-router-dom";
import logo from '../images/arda.jpeg';
import './home.css';
import '../index.css';
import FadeIn from '../components/FadeIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="homePage">
                <FadeIn>
                    <div className="heading">
                        <img src={logo} className="avatar" alt="Arda Höke" />
                        <h1>Arda Höke</h1>
                        <p className='p'>Computer Science @ <i>UC Berkeley</i></p>
                        <div className="buttons">
                            <Button variant="dark" onClick={() => window.open("https://drive.google.com/file/d/1Nyx6lmORrbcVqC-imHHfkYRnzy0v8Gla/view?usp=sharing")}>Resume</Button>
                            <Button variant="dark" onClick={() => {navigate("/projects")}}>Projects</Button>
                        </div>
                        <div className="socialMedia">
                            <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ cursor: 'pointer' }} onClick={() => window.open("mailto:hoke@berkeley.edu")} />
                            <FontAwesomeIcon icon={faLinkedin} size="xl" style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.linkedin.com/in/ardahk/")} />
                            <FontAwesomeIcon icon={faGithub} size="xl" style={{ cursor: 'pointer' }} onClick={() => window.open("https://github.com/ardahk")} />
                            <FontAwesomeIcon icon={faYoutube} size="xl" style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.youtube.com/@hoke20/")} />

                        </div>
                        
                    </div>

                </FadeIn>
            </div>
        </>
    )
}

export default HomePage