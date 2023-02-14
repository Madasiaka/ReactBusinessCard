import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About (){
    return(
        <nav className="nav">
            <img src="https://i.imgur.com/HkxM5FY.jpg" width={100} />
            <h1>Jenny Spadoni</h1>
            <h4>Fullstack Developer</h4>
            <a className="website" href="www.jennydevelops.netlify/app">jennydevelops.netlify </a>
            <div className="two-buttons">
                <a className="btn-one" href="mailto:jennyspadoni@gmail.com"><FontAwesomeIcon className="spacePlease" icon={faEnvelope} size="lg" /> Email </a>
                <a className="btn-two" href="https://www.linkedin.com/in/jennifer-spadoni/"><FontAwesomeIcon className="spacePlease" icon={faLinkedin} size="lg"  /> LinkedIn</a>
            </div>
        </nav>
    )
}