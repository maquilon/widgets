import React from 'react';
import { browserHistory, Link } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/#">WIDGETS INC.</a>
            <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarColor01" 
                aria-controls="navbarColor01" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>

    );
};

export default Header;
