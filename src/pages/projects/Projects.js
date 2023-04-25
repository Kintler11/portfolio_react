import './Projects.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import {motion} from 'framer-motion';
import ProjectList from "./ProjectList";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";
const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
const Projects = () => {
    const [animated, setAnimated] = useState(false);
    const [popupActive, setPopupActive] = useState(false);
    const [popupData, setPopupData] = useState({title:"", description:""})
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
{/*             {popupActive == true ? <ProjectPopup onClose={()=>{setPopupActive(false);}} title={popupData.title} description={popupData.description} /> : <></>}
 */}            <ProjectList title="Kehittäjänä Toiminut" style={animated ? tempStyle : {}}>
                <ProjectCard order={2} onClick={()=>{openInNewTab("https://www.somero.taskussa.info")}} image="/somerotaskussa.png" icons={["js","php","react"]}/>
                <ProjectCard order={1} onClick={()=>{openInNewTab("https://www.admin.taskussa.info")}} image="/taskussa.png" icons={["js","php","html","css"]}/>
                <ProjectCard order={3} onClick={()=>{openInNewTab("https://www.salotaskussa.fi")}} image="/salotaskussa.png" icons={["js","php","react"]}/>
            </ProjectList>{
            <ProjectList title="Omat Projektit" style={animated ? tempStyle : {}}>
                <ProjectCard order={1} onClick={()=>{openInNewTab("https://github.com/Kintler11/rust-discord-gpt-bot")}} image="/rust-bot.png" icons={["rust"]}/>
            </ProjectList>}
        </motion.div>
    );
}

export default Projects;
