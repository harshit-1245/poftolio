import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import {GiHamburgerMenu} from "react-icons/gi";
import Darkmode from '../mode/DarkMode';
import Menu from '../Menu/Menu';






const Navbar = () => {
   const [open,setOpen]=useState(false);


  const [animationStyle, setAnimationStyle] = useState({});
  

  const handleAnimation = (e) => {
    const offset = e.target.offsetLeft;
    setAnimationStyle({ width: `${e.target.offsetWidth}px`, left: `${offset}px` });
  };

  return (
    <>
    <header className="header">
      <div className="header-content">
        <div className="left">
          <div  className="port">Portfolio</div>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
                <NavLink
                  className="links"
                  to="/"
                  onClick={(e) => handleAnimation(e)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/about"
                  onClick={(e) => handleAnimation(e)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/skills"
                  onClick={(e) => handleAnimation(e)}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/experience"
                  onClick={(e) => handleAnimation(e)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/contact"
                  onClick={(e) => handleAnimation(e)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="animation" style={animationStyle}></div>
          </nav>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu size={50} onClick={()=>setOpen(true)}/>
       
        </div>
        <div className="mode">
          <Darkmode/>
        </div>
       
      </div>
    </header>
   
    <div className="navbars">
  { open &&  <Menu setOpen={setOpen}/>} 
    </div>
     
    </>

  );
};

export default Navbar;
