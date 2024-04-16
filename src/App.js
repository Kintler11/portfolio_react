import './App.css';
import logo from './logo.svg';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion';
import Header from './components/header/Header';
import MainInfo from './pages/main/MainInfo'
import Projects from './pages/projects/Projects'
import About from './pages/aboutme/About';

const App = () => {
  const [currentPage, setCurrentPage] = useState("");
  let location = useLocation();
  return(
    <>
      <Header clicked_page={(page)=>{setCurrentPage(page)}} />
      <div className='container'>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainInfo />} />
            <Route path="projects" element={<Projects /> } />
            <Route path="aboutme" element={<About /> } />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
