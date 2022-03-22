
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div>
           <div className='header'>
                <div className='logo'>
                    <img src={logo} alt=""/>
                </div>
                <div className='nav-ul'>
                <li href="/order">Order</li>
                <li href="/order preview">Order preview</li>
                <li href="/manage inventory">Manage inventory</li>
                </div>
                
           </div>
        </div>
    );
};


export default Header;