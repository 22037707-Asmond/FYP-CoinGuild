import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/PawGuild.css';

const Navbar = () => {
    return (
        <>
            <div class="d-flex justify-content-center">
                <nav className="navbar navbar-expand-sm ">
                    <img src="/images/PawGuild.png" style={{ width: '100px' }} />
                    <a className="navbar-brand" href="#">
                        <button type="button" className="btn btn-warning navbarBtn">About us</button>
                    </a>
                    <a className="navbar-brand" href="#">
                        <button type="button" className="btn btn-warning navbarBtn">Products</button>
                    </a>
                    <a className="navbar-brand" href="#">
                        <button type="button" className="btn btn-warning navbarBtn">Claims & Services</button>
                    </a>
                    <a className="navbar-brand" href="#">
                        <button type="button" className="btn btn-warning navbarBtn">Work with us</button>
                    </a>
                    <a className="navbar-brand" href="#">
                        <button type="button" className="btn btn-warning navbarBtn">Sign In</button>
                    </a>

                </nav>
            </div>
        </>
    );
};

export default Navbar;
