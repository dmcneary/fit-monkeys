import React, { Component } from "react";
import axios from "axios";
import Alert from "../../components/Alert"
import { Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
            firstName: "",
            lastName: "",
			username: '',
			password: '',
            gender: "",
            age: 13,
            location: "",
            message: ""
            //redirect: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    /*handleRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/login' />
        }
      }*/

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
        event.preventDefault();
		console.log('sign-up handleSubmit, username: ');
		console.log(this.state.username);
        const { history } = this.props;
		//request to server to add a new username/password
		axios.post('/user', {
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
				if (!response.data.errmsg) { //redirect to login page
					console.log('successful signup')
					history.push("/login");
				} else {
                    console.log('username already taken')
                    this.setState({message: "That username is already in use. Please pick a different username."})
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)
                this.setState({message: "Something went wrong...oops! Please try again later."})
			})
	}

    render() {
        return (
        <Container fluid>
            <Row>
                <Col size="6">
                    {(this.state.message) ?
                    <Alert message={this.state.message} /> :
                    <div>Please fill out all fields!</div>}
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
                    <button className="btn btn-primary" onClick={this.handleSubmit} type="submit">Register</button>
                    </form>
                </Col>
                <Col size="6">
                <p>Or,</p>
                <Link to="/login">
                    <button className="btn btn-warning">Login with an existing account</button>
                </Link>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Signup;