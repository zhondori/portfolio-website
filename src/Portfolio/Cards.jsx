import React from "react";
import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'

function Cards({ source, projectName, projectDescription, githubSource, link , alternative}) {
    return (
        <div className="portCard">
            <img src={source} alt={alternative} className="cardImg" />
            <div className="cardContent">
                <h3>{projectName}</h3>
                <p>{projectDescription}</p>
                <div className="buttons">
                    <a href={githubSource} target="_blank" rel="noreferrer" className="button">
                        Project codes
                        <FontAwesomeIcon icon={faCode} />
                    </a>
                    <a href={link} target="_blank" rel="noreferrer" className="button">
                        View
                        <FontAwesomeIcon icon={faEye} />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default  Cards;