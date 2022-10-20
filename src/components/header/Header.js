import './Header.css';
import React, { useState, useEffect, useRef } from "react";
import { faHome, faLightbulb, faBook, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import NavCard from './NavCard';
import { Link, NavLink, useLocation} from "react-router-dom";
const Header = ({clicked_page}) => {
    return (
        <header>
            <nav-container>
                <NavLink to="/" end><NavCard icon={faHome} title="Etusivu" /></NavLink>
                <NavLink to="/projects"><NavCard icon={faLightbulb} title="Projektit" /></NavLink>
                <NavLink to="/aboutme"><NavCard icon={faBook} title="Minusta" /></NavLink>
                <NavLink to="/contact"><NavCard icon={faAddressCard} title="Ota Yhteyttä" /></NavLink>
            </nav-container>
        </header>
    );
}

export default Header;
