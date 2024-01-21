import React, {useContext} from 'react';
import './Menu.css';
import logo from './images/wtclogo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Menu = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <div className='menu-logo'><Link to="/"><img src={logo} alt="Home" className="menu-logo" /></Link> </div>
                </li>
                <li className="menu-item"><Link to="/train">Train</Link></li>
                <li className="menu-item"><Link to="/compete">Compete</Link></li>
                <li className="menu-item"><Link to="/learn">Learn</Link></li>
                <li className="menu-item"><Link to="/leaderboard">Leaderboard</Link></li>
                {isLoggedIn ? (
                    <li className="menu-item"><Link to="/profile">Profile</Link></li>
                ) : (
                    <li className="menu-item"><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Menu;