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
           <ProjectList title="Kehittäjänä Toiminut" style={animated ? tempStyle : {}}>
                <ProjectCard onClick={()=>{openInNewTab("https://www.admin.taskussa.info")}} image="/taskussa.png" icons={["js","php","html","css"]}>
                    <h2 className='ProjectTitle'>Admin Taskussa</h2> 
                    <h3 className='ProjectText'>Ylläpitoverkkosivu Taskussa -sovelluksia varten. Kehitin verkkosivun ja sen backendin. Sovelluksille puhuva API oli myös osana kehitystä. </h3> 
                </ProjectCard>
                <ProjectCard onClick={()=>{openInNewTab("https://www.somero.taskussa.info")}} image="/somerotaskussa.png" icons={["js","php","react","Fornite"]} >
                    <h2 className='ProjectTitle'>Somero Taskussa</h2> 
                    <h3 className='ProjectText'>Kaupunkisovellus Somerolle jolle kehitin API:n ja jolle tein ylläpitoa.</h3> 
                </ProjectCard>
                <ProjectCard onClick={()=>{openInNewTab("https://www.salotaskussa.fi")}} image="/salotaskussa.png" icons={["js","php","react"]} >
                    <h2 className='ProjectTitle'>Salo Taskussa</h2> 
                    <h3 className='ProjectText'>Kaupunkisovellus Salolle. Sovellukselle kehitin bussidata parserin joka tuo käytäjälle esille bussi reitit ja ajat. Toin myös sovellukseen live bussi tieto osan, joka näyttää missä bussit on hetkellä liikkeellä.</h3> 
                </ProjectCard>
            </ProjectList>{
            <ProjectList title="Omat Projektit" style={animated ? tempStyle : {}}>
                <ProjectCard onClick={()=>{openInNewTab("https://github.com/Kintler11/rust-discord-gpt-bot")}} image="/rust-bot.png" icons={["rust"]} >
                    <h2 className='ProjectTitle'>Discord GPT Bot</h2> 
                    <h3 className='ProjectText'>Discord keskustelupalstalle luoto GPT -botti jonka ohjelmoin rust kielellä. Botti vastaa käyttäjien viesteille GPT mallin avulla.</h3> 
                </ProjectCard>
                <ProjectCard onClick={()=>{openInNewTab("https://github.com/Kintler11/LOL-Tracker")}} image="/lol-tracker.png" icons={["rust", "js", "svelte"]} >
                    <h2 className='ProjectTitle'>LOL Tracker</h2> 
                    <h3 className='ProjectText'>League Of Legends pelille tarkoitettu ohjelma, joka seuraa aktiivistä peliä ja pisteyttää pelin menevyyden mukaisesti. Ohjelmassa on myös muita työkaluja jolla voi pitää hauskaa pelissä.</h3> 
                </ProjectCard>
            </ProjectList>}
        </motion.div>
    );
}

export default Projects;
