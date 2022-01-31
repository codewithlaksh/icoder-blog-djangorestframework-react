import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {

    const [searchTxt, setSearchTxt] = useState('');

    const handleChange = (e) => {
        setSearchTxt(e.target.value);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iCoder</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item fw-bold">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item fw-bold">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item fw-bold">
                            <Link className="nav-link" to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                    <form className="d-flex" action="/search" method="get">
                        <input className="form-control me-2" type="search" name="q" onChange={handleChange} placeholder="Search" aria-label="Search" />
                        <button disabled={searchTxt.length<3} className="btn btn-danger" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
