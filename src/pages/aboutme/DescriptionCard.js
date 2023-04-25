import './DescriptionCard.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import { FaBrowser, FaTerminal, FaReact, FaGithub, FaEnvelope, FaServer } from 'react-icons/fa';
import {motion} from 'framer-motion';
import Tilt from 'react-parallax-tilt';
const DescriptionCard = (props) => {
    const { visible, cancel, clicked, children, icon, title } = props;
    return(
        <div className='DescriptionContainer'>
            <div className='mainInfo'>
                <h1>Minä</h1>
                {children}
            </div>
            <Tilt className='ContactPoints' options={{scale: 1.03,speed: 1000,max: 15}}>
                    <FaGithub onClick={()=>{window.open("https://github.com/Kintler11")}}/>
                    <FaEnvelope onClick={()=>{window.open("mailto:tomsonkait@gmail.com")}}/>
            </Tilt>
        </div>
    );
}
export default DescriptionCard;