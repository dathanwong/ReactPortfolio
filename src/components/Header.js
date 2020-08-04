import React from 'react';
import "./style.css";

const Header = (props) => {
    return ( 
        <section className="jumbotron text-center">
                <h1 className="jumbotron-heading">Dathan Wong</h1>
                <p className="lead text-muted">Full stack developer, fast learner, and double bogey golfer.</p>
                <p>
                    <button className="filter" on="false">All</button>
                    <button className="filter" on="false">JavaScript</button>
                    <button className="filter" on="false">HTML</button>
                </p>
        </section>
     );
}
 
export default Header;