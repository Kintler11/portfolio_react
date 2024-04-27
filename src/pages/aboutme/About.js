import './About.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import {motion} from 'framer-motion';
import { FaBrowser, FaTerminal, FaReact, FaHtml5, FaCss3, FaServer } from 'react-icons/fa';
import { TbBrowser} from 'react-icons/tb';
import SkillList from './SkillList';
import SkillCard from './SkillCard';
import DescriptionCard from './DescriptionCard';
import PersonalInfo from './SkillCard';
import SkillBar from '../../components/about/skillbar';

const About = () => {
    return(
        <div className='about-container'>
        <motion.div 
            className='PersonalContainer'
            initial={{marginLeft:"-20vh", opacity:0 }}
            animate={{marginLeft:"0px", opacity:1}}
            exit={{marginTop:"300vh", opacity:0}}
        >
            <DescriptionCard>
                <p>
                Hei, olen Kait - kehittäjä, jolla on kokemusta verkkokehityksestä, pelikehityksestä ja ohjelmoinnista.
                Olen luonnostaan ongelmanratkaisija ja rakastan luoda innovatiivisia ratkaisuja. 
                </p>
                <p>
                Verkkokehityksessä minulla on osaamista HTML:stä, CSS:stä ja JavaScript:stä sekä suosituista kehyskirjastoista, kuten React.
                </p>
                <p>
                Etsin aina uusia haasteita ja mahdollisuuksia rikkoa rajoja, olipa kyseessä sitten verkkosovellus tai peliprojekti.
                Vaikka olenkin hankkinut jonkin verran kokemusta Rust-ohjelmoinnista, pyrin jatkuvasti parantamaan taitojani ja oppimaan lisää erilaisista ohjelmointikielistä ja työkaluista.
                </p>
            </DescriptionCard>
            
        </motion.div>
        <motion.div 
            className='AboutContainer'
            initial={{marginTop:"-40vh", opacity:0 }}
            animate={{marginTop:"0px", opacity:1}}
            exit={{marginTop:"300vh", opacity:0}}
        >
            <SkillList title="Osaamiseni">
                <SkillCard title="Frontend" icon={<TbBrowser/>} >
                    <h2>React</h2>
                    <h2>Svelte</h2>
                    <h2>Javascript</h2>
                    <h2>CSS</h2>
                </SkillCard>
                <SkillCard title="Backend" icon={<FaServer/>} >
                    <h2>PHP</h2>
                    <h2>SQL</h2>
                    <h2>MySQL</h2>
                </SkillCard>
                <SkillCard title="Ohjelmistokehitys" icon={<FaTerminal/>} >
                    <h2>Rust</h2>
                    <h2>C#</h2>
                </SkillCard>
            </SkillList>
        </motion.div>
        </div>
    );
}

export default About;