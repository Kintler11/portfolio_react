import './Projects.scss';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import {motion} from 'framer-motion';
import ProjectList from "./ProjectList";
import ProjectCard from "./ProjectCard";
import { FaJs, FaReact, FaHtml5, FaCss3, FaRust, FaJava, FaSass, FaVaadin } from 'react-icons/fa';
import { SiSvelte } from "react-icons/si";
import ProjectPopup from "./ProjectPopup";
import projects from "../../data/projects.json"

const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const Projects = () => {
    const [animated, setAnimated] = useState(false);
    const [technologies, setTechnologies] = useState([])

    const [filter, setFilter] = useState([]);

    const filter_group = {
        "Web": ["React", "Svelte" , "Vaadin", "HTML", "JS", "CSS", "SCSS", "PHP"],
        "Software": ["Java", "Rust"]
    }

    const TechnologyIcons = {
        "js": <FaJs />,
        "java": <FaJava />,
        "scss": <FaSass />,
        "vaadin": <FaVaadin />,
        "php": <h1>PHP</h1>,
        "react": <FaReact />,
        "svelte": <SiSvelte />,
        "html": <FaHtml5 />,
        "css": <FaCss3 />,
        "rust": <FaRust />
    };

    useEffect(()=>{
        let techs = Array.from(new Set(projects.map((project) => {
            return project.skills.map((skill) => skill);
        }).flat()));

        setFilter(techs);

        setTechnologies(techs);
    },[])


    const tempStyle = {
        overflow:"hidden !important",
        flexWrap:"nowrap !important"
    }

    useEffect(()=>{
        setTimeout(()=>{
            setAnimated(true)
        },200*4)
    })

    return(
        <motion.div 
            className='ListContainer'            
            initial={{marginTop:"-40vh", opacity:0 }}
            animate={{marginTop:"0px", opacity:1}}
            exit={{marginTop:"300vh", opacity:0}}
        >
            <div className={'skill-list'}>
                <div className='skill-group'>
                    <h2 className='skill-group-heading'>Frontend</h2>
                    {
                        technologies.map((tech)=>{
                            return <div className='skill-container' key={tech} onClick={
                                        ()=>{
                                            (filter.includes(tech)) ? 
                                            setFilter(filter.filter((t) => t!=tech)) : 
                                            setFilter([...filter, tech])
                                        }
                                    }
                                    aria-selected={filter.includes(tech) ? true : false}
                                    >
                                        <div className='skill-logo'>{TechnologyIcons[tech.toLowerCase()]}</div>
                                        <div className='skill-name'>{tech}</div>
                                    </div>
                        })
                    }
                </div>
            </div>
           <ProjectList title="Kehittäjänä toiminut" style={animated ? tempStyle : {}}>
                {
                    projects.map((project) => {
                        let in_filter = project.skills.filter(function(n) {
                            return filter.indexOf(n) !== -1;
                        });
                        if (in_filter.length == 0){return;}
                        return  <ProjectCard onClick={()=>{openInNewTab(project.link)}} image={project.img} icons={project.skills} key={project.name}>
                                    <h2 className='ProjectTitle'>{project.name}</h2> 
                                    <h3 className='ProjectText'>{project.description}</h3> 
                                </ProjectCard>;
                    })
                }
            </ProjectList>
        </motion.div>
    );
}

export default Projects;
