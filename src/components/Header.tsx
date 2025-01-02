import './Header.css';
import { Link } from 'react-router-dom';
import logo from "../assets/socrative-logo.png";
import { useAuth } from "../hooks/AuthProvider";

function Header() {
    const auth = useAuth();

    // Use the first room id as the default room as there's currently only support for one room.
    const defaultRoomId = auth.user?.rooms?.[0]?.roomId || "No Room";

    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Socrative Logo" className="logo" />
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/launch">Launch</Link></li>
                        <li><Link to="/library">Library</Link></li>
                        <li><Link to="/results">Live Results</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <ul className="nav-links">
                    <li className="room-id">{defaultRoomId}</li>
                    <li className="user-email">{auth.user?.email}</li>
                    <li>
                        <button className="sign-out-btn" onClick={auth.logout}>Sign Out</button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;