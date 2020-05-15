import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/funny">Funny</NavLink></li>
        <li><NavLink to="/tech">Tech</NavLink></li>
        <li><NavLink to="/sports">Sports</NavLink></li>
      </ul>
    </nav>
    
  ); 
}