import './SkillCard.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import {motion} from 'framer-motion';
import Tilt from 'react-parallax-tilt';
const SkillList = (props) => {
    const { visible, cancel, clicked, children, icon, title } = props;
    return(
        <Tilt className='SkillCard' onClick={clicked} hidden={true} options={{scale: 1.03,speed: 1000,max: 15}}>
            <div className='CardIcon'>{icon}</div>
            <div className='CardTitle'>{title}</div>
            <div className='CardSkills'>
                {children}
            </div>
        </Tilt>
    );
}
export default SkillList;