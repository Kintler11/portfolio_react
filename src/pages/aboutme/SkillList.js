import './SkillList.css';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
import {motion} from 'framer-motion';

const SkillList = (props) => {
    const { visible, cancel, children, title } = props;
    return(
        <div className='SkillList'>
            <div className='SkillListTitle'>{title}</div>
            <div className='SkillListContent'>{children}</div>
        </div>
    );
}
export default SkillList;