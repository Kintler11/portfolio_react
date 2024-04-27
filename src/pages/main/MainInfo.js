import './MainInfo.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import Globe from 'react-globe.gl';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import CustomGlobe from "./CustomGlobe";
import RandomText from '../../components/RandomText';
const MainInfo = () => {
    const [showGlobe, setShowGlobe] = useState(false);
    const [showText, setShowText] = useState(false);

    var birthday = +new Date('07/09/2003');

    useEffect(()=>{setTimeout(()=>setShowGlobe(true),(0))},[])
    useEffect(()=>{setTimeout(()=>setShowText(true),(500))},[])
    return (
        <motion.div 
            className='info-container'
            initial={{marginTop:"-40vh", opacity:0 }}
            animate={{marginTop:"0px", opacity:1}}
            exit={{marginTop:"300vh", opacity:0}}
        >
            <div className='info-text'>
                <h1>Kait Tomson</h1>
                    <TypeAnimation
                        sequence={[
                            'Verkkokehittäjä',
                            1000,
                            'Ohjelmistokehittäjä',
                            2000,
                            'Backendkehittäjä',
                            1000
                        ]}
                        wrapper="div"
                        className='changingText'
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em' }}
                    />
                <h2>Hei, olen Kait. Olen kehittäjä jolla on kokemusta verkko- ja ohjelmistokehityksessä.</h2>
            </div>
            <div className='globe-container'>
                {showGlobe ? <CustomGlobe/> : <div className='scene-container' style={{minWidth:"500px"}}></div>}
                {showText ? <RandomText text='Turku, Finland' className="location-text" /> : <></>}
            </div>
        </motion.div>
    );
}

export default memo(MainInfo);
