import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

export default function Socials (){
    return(
        <nav className="footer-nav">
            <a href="www.twitter.com/Jenny_Spadoni"><FontAwesomeIcon icon={faTwitterSquare} size="xl" className="white" />  </a>
            <a href="www.facebook.com/jenny.spadoni"><FontAwesomeIcon icon={faFacebookSquare} size="xl" className="white"/></a>
            <a href="https://www.linkedin.com/in/jennifer-spadoni"><FontAwesomeIcon icon={faLinkedin} size="xl" className="white" /> </a>
            <a href="https://github.com/Madasiaka"><FontAwesomeIcon icon={faGithubSquare} size="xl" className="white"/> </a>
        </nav>
    )
}