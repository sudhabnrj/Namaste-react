import { LOGO_URL } from '../utils/constents.js'
import { useState } from 'react';

const Header = () =>{

    const [accButton, setAccountButton] = useState('Login');

    const accountHandler = () => {
        accButton === 'Login' ? setAccountButton('Logout') : setAccountButton('Login');
    };

    return(
        <div className="header">
            <div className="container d-flex justify-content-between">
                <div className="logo-container">
                    <a href="#"><img className="logo" src={LOGO_URL} /></a>
                </div>
                <div className="nav-items d-flex">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <li>
                            <button type="button" className="account-btn" onClick={()=> {accountHandler()}}>{accButton}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;