import React from 'react'
import './Menu.css'
import {AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';
const Menu = ({setOpen}) => {
  return (<>
      <div className="header-pannel">
        <div className="opac-layer"></div>
         <div className="link-content">
            <div className="link-header">
                <span className="heading">Menu</span>
                <span className="close-btn">
                    <AiOutlineClose onClick={()=>setOpen(false)}/>
                    <span className="text" onClick={()=>setOpen(false)}>Close</span>
                </span>
                

            </div>
            <div className="nav-link">
  <ul className="nav-list">
    <li className="nav-item" onClick={()=>setOpen(false)}><Link to="/">Home</Link></li>
    <li className="nav-item" onClick={()=>setOpen(false)}><Link to="/about">About</Link></li>
    <li className="nav-item" onClick={()=>setOpen(false)}><Link to="/skill">Skill</Link></li>
    <li className="nav-item" onClick={()=>setOpen(false)}><Link to="/experience">Experience</Link></li>
    <li className="nav-item" onClick={()=>setOpen(false)}><Link to="/contact">Contact</Link></li>
  </ul>
</div>
         </div>
      
      </div>

     
    </>
  )
}

export default Menu
