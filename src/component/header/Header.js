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
                <a href="/order">Order</a>
                <a href="/order preview">Order preview</a>
                <a href="/manage inventory">Manage inventory</a>
                </div>
           </div>
        </div>
    );
};


export default Header;