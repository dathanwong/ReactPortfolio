import React from 'react';
import "./style.css";

const Header = (props) => {
    return ( 
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Dathan Wong</h1>
                <p className="lead about">Full stack developer living in Los Angeles, California. I love to golf, play basketball, and code. I have experience with a variety of languages and technologies and am always interested in learning more. Connect with me on <a href="https://www.linkedin.com/in/dathanwong/">LinkedIn</a>, I would love to collaborate on a project or hit the golf course!</p>
            </div>
        </section>
     );
}
 
export default Header;