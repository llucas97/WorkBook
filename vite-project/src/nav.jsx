import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>UMC</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-end navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to={'/Sign_Up'}>회원가입</Link>
                        <Link className="nav-link" to={'/Popularr'}>Popular</Link>
                        <Link className="nav-link" to={'/Now_playing'}>Now Playing</Link>
                        <Link className="nav-link" to={'/Top_Rated'}>Top Rated</Link>
                        <Link className="nav-link" to={'/Up_Coming'}>Upcoming</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
