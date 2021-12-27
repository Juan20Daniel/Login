import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = ({ menu, setMenu }) => {
    const openMenu = () => {
        setMenu(!menu);
    }
    return (
        <nav>
            <div className='nav-container'>
                <div className='nav__logo'>
                    <p>DevCode</p>
                </div>
                <div className='nav__links'>
                    <img 
                        onClick={openMenu}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAIJJREFUWEft1UEKgDAMRNHMzfXkEUF31YGWQAq/26DEl4xVNDtq1k/QkJsIQgg5AVffZ4cyM93XrNQlDTE+hWjo4d5nh1b2Y+VZhJzeX8qOiCiLvqRz1Byxf1Vmfoz3yMqOpOH7SZkjR2haiNve3fbthNysq+qkzMkihJATcHV2yAldbAcpJfcN1LoAAAAASUVORK5CYII="
                        alt="Icon-menu-hamburger"
                    />
                    <ul className='nav__links--box'>
                        <li><Link className='nav-link' to="/">Inicio</Link></li>
                        <li><Link className='nav-link' to="/">Nosotros</Link></li>
                        <li><Link className='nav-link' to="/">Contactos</Link></li>
                        <li className='link--btn-login'>
                            <button className='nav-link'>Login</button>
                        </li>
                        <li>
                            <button className='nav-link'>Sigin</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;