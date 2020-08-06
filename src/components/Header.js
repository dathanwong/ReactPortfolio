import React from 'react';
import "./style.css";
import {navigate} from '@reach/router';

const Header = (props) => {

    const {selected, setSelected} = props;

    function handleSelection(e){
        setSelected(e.target.id);
    }

    return ( 
        <section className="jumbotron text-center">
            <div className="container">
                <div className="row mb-3 justify-content-center">
                    <h1 className="jumbotron-heading">Dathan Wong</h1>
                </div>
                <div className="row">
                    <p className="lead about">Full stack developer living in Los Angeles, California. I love to golf, play basketball, and code. I have experience with a variety of languages and technologies and am always interested in learning more. Connect with me on <a href="https://www.linkedin.com/in/dathanwong/">LinkedIn</a>, I would love to collaborate on a project or hit the golf course!</p>
                </div>
                <div className="row">
                    <div className="col mr-2">
                        <div id="projects" className={selected === "projects" ? "header-button-selected" : "header-button"} onClick={e => handleSelection(e)}>Projects</div>
                    </div>
                    <div className="col mr-2">
                        <div id="resume" className={selected === "resume" ? "header-button-selected" : "header-button"} onClick={e => handleSelection(e)}>Resume</div>
                    </div>
                    {/* <div className="col mr-2">
                        <div id="about" className={selected === "about" ? "header-button-selected" : "header-button"} onClick={e => handleSelection(e)}>About Me</div>
                    </div> */}
                    <div className="col mr-2">
                        <div onClick={() => navigate('https://www.linkedin.com/in/dathanwong/')} className="header-button">LinkedIn</div>
                    </div>
                    <div className="col mr-2">
                        <div onClick={() => navigate('https://github.com/dathanwong')} className="header-button">GitHub</div>
                    </div>
                </div>
            
            </div>
        </section>
     );
}
 
export default Header;