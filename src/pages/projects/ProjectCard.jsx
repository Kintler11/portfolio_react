import './ProjectCard.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import { FaJs, FaReact, FaHtml5, FaCss3, FaRust, FaJava, FaSass, FaVaadin } from 'react-icons/fa';
import { SiSvelte } from "react-icons/si";
import Tilt from 'react-parallax-tilt';
const ProjectCard = ({timeline, image, icons, onClick, children, working}) => {

    const TechnologyIcons = {
        "js": <FaJs />,
        "java": <FaJava />,
        "scss": <FaSass />,
        "vaadin": <FaVaadin />,
        "js": <FaJs />,
        "php": <h1>PHP</h1>,
        "react": <FaReact />,
        "svelte": <SiSvelte />,
        "html": <FaHtml5 />,
        "css": <FaCss3 />,
        "rust": <FaRust />
    };
    
    return(
        <>
            <div className='ProjectCard' onClick={onClick}>
                <div className='ProjectTechs'>
                    {icons.map((tech) => {
                        if(!TechnologyIcons[tech.toLowerCase()]){return;}
                        return <div className='TechLogo' key={tech}>{TechnologyIcons[tech.toLowerCase()]}</div>;
                    })}
                </div>
                <img src={image || './default.png' } />
                <div className="ProjectDescription">
                    {children}
                </div>
            </div>

        </>
    );
}

export default ProjectCard;
