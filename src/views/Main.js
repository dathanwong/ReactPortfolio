import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const Main = (props) => {
    return (
        <>
        <Header/>
        <div className="row">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ProjectCard/>
                    </div>
                    <div className="col-4">
                        <ProjectCard/>
                    </div>
                    <div className="col-4">
                        <ProjectCard/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ProjectCard/>
                    </div>
                    <div className="col-4">
                        <ProjectCard/>
                    </div>
                    <div className="col-4">
                        <ProjectCard/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ProjectCard/>
                    </div>
                    <div className="col-4">
                        <ProjectCard/>
                    </div>
                    <div className="col-4">
                        <ProjectCard/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Main;