import React, { useState, useMemo, useEffect, useRef } from "react";

const RandomText = ({text, style, className}) => {

    const [unScrambledText, setUnScrambledText] = useState("");
    const [scrambledText, setScrambledText] = useState("");
    
    let per_char = 2;

    let current_iteration = 0;

    const [time, setTime] = useState(Date.now());

    const randomString = (length) => {
        let output = "";
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        
        for(let i = 0; i < length; i++){
            output+= characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return output;
    }

    useEffect(() => {
        const interval = setInterval(()=>{
            let current_loc = Math.floor(current_iteration / per_char);
            setUnScrambledText(text.substring(0, current_loc));
            setScrambledText(randomString(text.length - current_loc));

            current_iteration++;

            if(current_loc == text.length + 1){
                clearInterval(interval);
            }

        },40);
    }, []);

    return (
        <div style={style} className={className}>
            <h2>{unScrambledText}</h2>
            <h2 className="scramble">{scrambledText}</h2>
        </div >
    );
}

export default RandomText;
