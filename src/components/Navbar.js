import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navigation() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Bookstore',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav>
      <div className="navContainer">
        <h3 className="logo">Bookstore</h3>
        <ul className="navLinks">
          {links.map((link) => (
            <li className="NavLink" key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
