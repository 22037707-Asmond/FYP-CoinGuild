import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/PawGuild.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div class="d-flex justify-content-center">
                <nav className="navbar navbar-expand-sm ">
                    <Link to='/'>
                        <img src="/images/PawGuild.png" style={{ width: '100px' }} />
                    </Link>
                    <Link className="navbar-brand">
                        <button type="button" className="btn btn-warning navbarBtn">About us</button>
                    </Link>
                    <Link className="navbar-brand">
                        <button type="button" className="btn btn-warning navbarBtn">Products</button>
                    </Link>
                    <Link className="navbar-brand">
                        <button type="button" className="btn btn-warning navbarBtn">Claims & Services</button>
                    </Link>
                    <Link className="navbar-brand">
                        <button type="button" className="btn btn-warning navbarBtn">Work with us</button>
                    </Link>
                    <Link to="/login" className="navbar-brand">
                        <button type="button" className="btn btn-warning navbarBtn">Sign In</button>
                    </Link>

                </nav>
            </div>
        </>
    );
};

export default Navbar;
