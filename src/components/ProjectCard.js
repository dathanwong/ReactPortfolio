import React, { useState } from 'react';
import "./style.css";

const ProjectCard = (props) => {

    const {imageLink, title, description, technologies, mobile} = props;

    return ( 
        <div className="card mb-4 shadow-sm text-center">
            <div className="row justify-content-center">
                <div className="col text-center">
                    <img className={mobile ? "card-img-mobile" : "card-img"} src={imageLink} alt={title}/>
                </div>
            </div>
            
            <div className="card-body">
                <p className="title">{title}</p>
                <p className="card-text description">{description}</p>
                <div className="row my-2">
                    <div className="col d-flex justify-content-center align-items-center">
                        <small className="text-muted">{technologies}</small>
                    </div>
                </div>
                <div className="row my-2 align-items-center">
                    <div className="col btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">More Info</button>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default ProjectCard;