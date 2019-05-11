import React, { Component } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Input, SignupBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";


class Signup extends Component {
	constructor() {
		super()
		this.state = {
            firstName: "",
            lastName: "",
			username: '',
			password: '',
            gender: "",
            age: 0,
            location: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
			username: this.state.username,
			password: this.state.password,
            gender: this.state.gender,
            age: this.state.age,
            location: this.state.location
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

    render() {
        return (
        <Container fluid>
            <Header />
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
                    <SignupBtn onClick={this.handleSubmit} type="submit"/>
                </Col>
                <Col size="6">
                <p>Or,</p>
                <Link to="/login">
                    <button class="btn btn-warning">Login with an existing account</button>
                </Link>
                </Col>
            </Row>
            <Footer />
        </Container>
        );
    }
}

export default Signup;