import './NavCard.css';
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavCard = ({icon, title, selected, onClick}) => {
     return (
        <div 
            className='NavCard' 
            onClick={onClick}
        >
            <div className='CardFill'></div>
            <FontAwesomeIcon icon={icon} />
            <h1>{title}</h1>
        </div>
    );
}

export default NavCard;