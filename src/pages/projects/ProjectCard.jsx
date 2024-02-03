import './ProjectCard.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import { FaJs, FaReact, FaHtml5, FaCss3, FaRust } from 'react-icons/fa';
import { SiSvelte } from "react-icons/si";
import Tilt from 'react-parallax-tilt';
const ProjectCard = ({image, icons, onClick, children}) => {

    const TechnologyIcons = {
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
            <div className='ProjectCard'>
                <div className='ProjectTechs'>
                    {icons.map((tech) => {
                        if(!TechnologyIcons[tech]){return;}
                        return <div className='TechLogo' key={tech}>{TechnologyIcons[tech]}</div>;
                    })}
                </div>
                <img onClick={onClick} src={image || './default.png' } />
                <div className="ProjectDescription">
                    {children}
                </div>
            </div>

        </>
    );
}

export default ProjectCard;
