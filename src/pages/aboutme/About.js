import './About.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import {motion} from 'framer-motion';
import { FaBrowser, FaTerminal, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { TbBrowser} from 'react-icons/tb';
import SkillList from './SkillList';
import SkillCard from './SkillCard';
const About = () => {
    return(
        <motion.div 
            className='AboutContainer'
            initial={{marginTop:"-40vh", opacity:0 }}
            animate={{marginTop:"0px", opacity:1}}
            exit={{marginTop:"300vh", opacity:0}}
        >
            <SkillList title="Osaamiseni">
                <SkillCard title="Backend" icon={<FaTerminal/>} >
                    <h2>PHP</h2>
                    <h2>SQL</h2>
                    <h2>MySQL</h2>
                </SkillCard>
                <SkillCard title="Frontend" icon={<TbBrowser/>} >
                    <h2>React</h2>
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>Javascript</h2>
                </SkillCard>
                <SkillCard title="Ohjelmistokehitys" icon={<TbBrowser/>} >
                    <h2>React</h2>
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>Javascript</h2>
                </SkillCard>
            </SkillList>
        </motion.div>
    );
}

export default About;