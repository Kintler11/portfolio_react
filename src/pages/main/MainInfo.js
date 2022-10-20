import './MainInfo.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import Globe from 'react-globe.gl';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import CustomGlobe from "./CustomGlobe";
const MainInfo = () => {
    const [showGlobe, setShowGlobe] = useState(false);
    useEffect(()=>{setTimeout(()=>setShowGlobe(true),(500))},[])
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
                            'UX-Suunittelija',
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
                <h2>Olen nettisivujen suunnittelija/ohjelmistokehittäjä peräisin Somerolta. Tykkään kehittää nettisivuja ja ohjemistoa. </h2>
            </div>{/* 
            <Globe backgroundColor="rgba(0,0,0,0)" width="500" height="500"/> */}
            {showGlobe ? <CustomGlobe /> : <div className='scene-container' style={{minWidth:"500px"}}></div>}
        </motion.div>
    );
}

export default memo(MainInfo);
