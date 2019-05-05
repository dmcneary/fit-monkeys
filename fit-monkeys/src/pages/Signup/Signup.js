import React, { Component } from "react";
//import Header from "../../components/Header";
import { Input, SignupBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
//import API from "../../utils/API";
import { Link } from "react-router-dom";
//import Footer from "../components/Footer";


class Signup extends Component {
    state = {
        firstName: "",
        lastName: "",
        gender: "",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    /* handleNewUserSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
        this.setState({
            redirect: true
          });
        API.newUser({

        })
        .then(res => 
            this.handleRedirectLogin)
        .catch(err => console.log(err))
    }
    };

    handleRedirectLogin = () => {
        <Route exact path="/" render={() => (
            loggedIn ? (
              <Redirect to="/dashboard"/>
            ) : (
              <PublicHomePage/>
            )
          )}/>
    } */

    render() {
        return (
        <Container fluid>
            <Row>
                <Col size="6">
                    <form>
                        <p>First name: </p>
                        <Input value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        placeholder="Your first name"/>
                        <p>Last name: </p>
                        <Input value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        placeholder="Your last name" />
                        <p>Username: </p>
                        <Input value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Your desired username"/>
                        <p>Password: </p>
                        <Input value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password" type="password"
                        placeholder="Password"/>
                        <p>Gender</p>
                        <Input value={this.state.gender}
                        onChange={this.handleInputChange}
                        name="gender"
                        placeholder="Gender"/>
                        <p>Age: </p>
                        <Input type="number" min="13" max="120" value={this.state.age}
                        onChange={this.handleInputChange}
                        name="age" />
                        <p>Location: </p>
                        <Input value={this.state.location}
                        onChange={this.handleInputChange}
                        name="location"
                        placeholder="Location"/>                        
                    </form>
                    <SignupBtn />
                </Col>
                <Col size="6">
                <p>Or,</p>
                <Link to="/login">
                    <button class="btn btn-warning">Login with an existing account</button>
                </Link>
                </Col>
            </Row>
            
        </Container>
        );
    }
}
//insert footer component at line 74, header at 49
export default Signup;