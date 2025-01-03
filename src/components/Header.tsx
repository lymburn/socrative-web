import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from "../assets/socrative-logo.png";
import { useAuth } from "../hooks/AuthProvider";
import { Button } from '@mui/material';

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
                        <li>
                            <NavLink to="/launch" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Launch
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/library" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Library
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/results" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Live Results
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <ul className="nav-links">
                    <li className="room-id">{defaultRoomId}</li>
                    <li className="user-email">{auth.user?.email}</li>
                    <li>
                        <Button
                            variant="contained"
                            color="destructive"
                            disableElevation
                            onClick={auth.logout}>
                            Sign Out
                        </Button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;