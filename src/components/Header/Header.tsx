import './Header.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/socrative-logo.png";

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Socrative Logo" className="logo" />
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/launch">Launch</Link></li>
                        <li><Link to="/library">Library</Link></li>
                        <li><Link to="/live-results">Live Results</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <ul className="nav-links">
                    <li className="room-id">LU489</li>
                    <li>Account</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;