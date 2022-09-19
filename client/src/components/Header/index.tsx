import React  from "react";
import { Button } from "@mui/material";
import useAuthorized from "hooks/useAuthorized";
import { Link, useNavigate } from "react-router-dom";
import './index.css';

const Header = () => {

    const isAuth = useAuthorized();

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    if (!isAuth) {
        return null;
    }

    return (
        <>
            <div className="header">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/employee">Employee</Link>
                <Button variant="outlined" onClick={() => logout()}>Logout</Button>
            </div>
        </>
    )
}

export default Header;