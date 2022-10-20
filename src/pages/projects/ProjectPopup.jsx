import './ProjectPopup.css';
import { FaTimes } from 'react-icons/fa';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import {motion} from 'framer-motion';
const ProjectPopup = ({onClose, title, description}) => {
    return(
        <motion.div className='ProjectModal' initial={{marginTop:"-200em", opacity:0}} animate={{marginTop:"0em",opacity:1}}>
            <div className='ModalHeader'>
                <div className='HeaderInfo'>
                    <h1>{title || "title"}</h1>
                    <h2>by: Kait Tomson</h2>
                </div>
                <FaTimes onClick={onClose}/>
            </div>
            <div className='ModalInfo'>
                <h1>{title || "title"}</h1>
                <h2>{description || "description"}</h2>
            </div>
        </motion.div>
    );
}

export default ProjectPopup;
