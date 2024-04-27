import './ProjectList.scss';
import React, { useState, useMemo, useEffect, useRef, memo } from "react";
const ProjectList = (props) => {
    const { visible, cancel, children, title } = props;
    return(
        <div className='ProjectList'>
            <div className='ListTitle'>{title}</div>
            <div className='ListContent'>{children}</div>
        </div>
    );
}

export default ProjectList;
