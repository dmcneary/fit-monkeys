import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import "./Header.css";
import axios from 'axios';

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