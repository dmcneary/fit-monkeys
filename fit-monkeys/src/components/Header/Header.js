import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import "./Header.css";
import axios from 'axios';

<<<<<<< HEAD
class Header extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }
=======
const Header = () => (
    <nav className="header navbar navbar-expand-lg justify-content-between">
        <a className="navbar-brand" href="/">
            Fit Monkeys
    </a>
        <a className="nav-log" href="/">
            Log In
    </a>

    </nav>
);
// const Header = () => (
//     <nav className="navbar navbar-light bg-light justify-content-between">
//         <a className="navbar-brand">Navbar</a>
//         <form className="form-inline">
//             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </form>
//     </nav>
// );
>>>>>>> 5cd432cc09d295880acc98ca452915fa50f6dbb1

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <nav className="header navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">Fit Monkeys</a>
                {loggedIn ? (
                    // move logout to navbar logged in
                    <div>
                        <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                            <span className="text-secondary">Logout</span>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/" className="btn btn-link text-secondary">
                            <span className="text-secondary">Home</span>
                        </Link>
                        <Link to="/login" className="btn btn-link text-secondary">
                            <span className="text-secondary">Login</span>
                        </Link>
                        <Link to="/signup" className="btn btn-link">
                            <span className="text-secondary">Sign up</span>
                        </Link>
                    </div>
                )}

            </nav>
        )
    }
}

export default Header;