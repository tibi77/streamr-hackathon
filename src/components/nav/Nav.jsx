import React,{ Component } from 'react';
import { login, logout, isLoggedIn } from '../../utils/AuthService';
import Auth from '../../utils/AuthService';

const auth= new Auth();

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar is-dark" aria-label="main navigation">
                <div className="navbar-brand">
                <a className="navbar-item is-info" href="#" style={{ paddingLeft: 25  }}>
                    <span className="icon has-text-danger">
                    <i className="fa fa-lg fa-play-circle icon is-large" aria-hidden="true"></i>
                    </span>
                    <span className="has-text-danger"> Flixer </span>
                </a>
            
                <button className="button navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                </div>

                <div className="navbar-start">
                    <a href="" className="navbar-item">Home</a>
                    <a href="/" className="navbar-item">All Videos</a>
                    <a href="/upload" className="navbar-item">Upload</a>
                </div>

                <div className="navbar-end">
                    {
                        (auth.isAuthenticated()) ? ( <a className="navbar-item is-danger" onClick={() => auth.logout()}>Log out </a> ) : ( <a className="navbar-item is-danger" onClick={() => auth.login()}>Log In</a> )
                    }
                </div>
            </nav>
        )
    }
}

export default NavBar;