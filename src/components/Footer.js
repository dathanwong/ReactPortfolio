import React from 'react';
// import githubImage from '../images/GitHub_Logo.png';
// import linkedInImage from '../images/LI-Logo.png';
import './style.css'

const Footer = (props) => {
    return ( 
        <footer className="text-muted">
                <div className="container text-center">
                    <a href="/#">Back to top</a>
                    {/* <a href="https://github.com/dathanwong"><img className="links" src={githubImage} alt="Github Link"/></a>
                    <a href="https://www.linkedin.com/in/dathanwong/"><img className="links" src={linkedInImage} alt="LinkedIn Link"/></a> */}
                </div>
        </footer>
     );
}
 
export default Footer;