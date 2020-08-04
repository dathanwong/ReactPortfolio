import React from 'react';
import "./style.css";

const Header = (props) => {
    return ( 
        <section className="jumbotron text-center">
                <h1 className="jumbotron-heading">Dathan Wong</h1>
                <p className="lead about">Full stack developer living in the Los Angeles, California area. I love to golf, play basketball, and code. Connect with me on <a href="https://www.linkedin.com/in/dathanwong/">LinkedIn</a>, I would love to collaborate on a project!</p>
                <p>
                    <button className="filter" on="false">All</button>
                    <button className="filter" on="false">JavaScript</button>
                    <button className="filter" on="false">HTML</button>
                </p>
        </section>
     );
}
 
export default Header;