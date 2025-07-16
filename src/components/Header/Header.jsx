import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { menuItems } from '../services/menuService';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openNav = () => setIsMenuOpen(true);
    const closeNav = () => setIsMenuOpen(false);

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header-content">
                            {/* Logo */}
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>

                            {/* Menu */}
                            <div className={`menu-list ${isMenuOpen ? 'open' : ''}`} id="mySidenavs">
                                <span className="menu-close" onClick={closeNav}>
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                                <ul className="menu">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                className={({ isActive }) =>
                                                    `${item.className || ''} ${isActive ? 'active' : ''}`
                                                }
                                            >
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Menu Icon */}
                            <div className="menu-icon" onClick={openNav}>
                                <span>
                                    <i className="fa-solid fa-bars"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
                id="menuOverlay"
                onClick={closeNav}
            ></div>
        </header>
    );
};

export default Header;
