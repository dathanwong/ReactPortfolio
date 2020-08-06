import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../components/style.css';
import Projects from './Projects';
import Resume from './Resume';

const Main = (props) => {

    const [selected, setSelected] = useState("projects");

    return (
        <>
            <Header selected={selected} setSelected={setSelected} />
            <div className="content-area">
                <div className="container-fluid">
                {
                    selected === "projects" && <Projects/>
                }
                {
                    selected === "resume" && <Resume/>
                }
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default Main;