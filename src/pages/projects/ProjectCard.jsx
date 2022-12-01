import './ProjectCard.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import { FaJs, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
const ProjectCard = ({image, icons, onClick, order}) => {
    const [technologies,setTechnologies] = useState([])
    const [showCard, setShowCard] = useState(false);
    useEffect(()=>{
        if(icons && icons.length > 0){
            setTechnologies(icons)
        }
    },[icons])

    return(
        <>
            <Tilt className='ProjectCard' onClick={onClick} hidden={true} perspective={500}  options={{scale: 1.03,speed: 1000,max: 15}}>
                <div className='ProjectTechs'>
                    {(technologies.includes("js")) ? <div className='TechLogo'><FaJs /></div> : <></>}
                    {(technologies.includes("php")) ? <div className='TechLogo'><h1>PHP</h1></div> : <></>}
                    {(technologies.includes("react")) ? <div className='TechLogo'><FaReact /></div> : <></>}
                    {(technologies.includes("html")) ? <div className='TechLogo'><FaHtml5 /></div> : <></>}
                    {(technologies.includes("css")) ? <div className='TechLogo'><FaCss3 /></div> : <></>}
                </div>
                <img src={image || './default.png' } />
            </Tilt>
        </>
    );
}

export default ProjectCard;
