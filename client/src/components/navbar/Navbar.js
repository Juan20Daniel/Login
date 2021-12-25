import React, { useState } from 'react';
import './navbar.css';

const Navbar = ({ menu, setMenu }) => {
    const openMenu = () => {
        setMenu(!menu);
    }
    return (
        <nav>
            <div className='nav-container'>
                <div className='nav__logo'>
                    <p>Login and Sigin</p>
                </div>
                <div className='nav__links'>
                    <img 
                        onClick={openMenu}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAIJJREFUWEft1UEKgDAMRNHMzfXkEUF31YGWQAq/26DEl4xVNDtq1k/QkJsIQgg5AVffZ4cyM93XrNQlDTE+hWjo4d5nh1b2Y+VZhJzeX8qOiCiLvqRz1Byxf1Vmfoz3yMqOpOH7SZkjR2haiNve3fbthNysq+qkzMkihJATcHV2yAldbAcpJfcN1LoAAAAASUVORK5CYII="
                        alt="Icon-menu-hamburger"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;