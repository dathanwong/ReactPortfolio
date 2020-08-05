import React, { useState } from 'react';
import "./style.css";

const ProjectCard = (props) => {

    const {imageLink, title, description, technologies, mobile, inspiration, challenges, nextSteps, collaborators, links} = props;

    const [isExpanded, setIsExpanded] = useState(false);

    return ( 
        <div className={isExpanded ? "card-expanded mb-4 shadow-sm text-center" : "card mb-4 shadow-sm text-center"}>
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
                        <button type="button" onClick={ e => setIsExpanded(!isExpanded)} className="btn btn-sm btn-outline-secondary">{isExpanded ? "Less Info" : "More Info"}</button>
                    </div>
                </div>
                {
                    isExpanded &&
                    <> 
                    <div className="row my-2 row-title text-left">
                        Inspiration:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {inspiration}
                    </div>
                    <div className="row my-2 row-title text-left">
                        Challenges:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {challenges}
                    </div>
                    <div className="row my-2 row-title text-left">
                        Next Steps:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {nextSteps}
                    </div>
                    <div className="row my-2 row-title text-left">
                        Collaborators:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {collaborators}
                    </div>
                    <div className="row my-2 row-title text-left">
                        Links:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {links}
                    </div>
                    </>
                }
            </div>
        </div>
     );
}
 
export default ProjectCard;