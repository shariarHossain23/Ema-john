import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
           <div className='header'>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                <a href="#">Order</a>
                <a href="#">Order preview</a>
                <a href="#">Manage inventory</a>
                </div>
           </div>
        </div>
    );
};

export default Header;