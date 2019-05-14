import React, { Component } from "react";
import SignUpBtn from "../../components/Buttons/SignUp";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";


class Landing extends Component {

    render() {
        return (
                <Container fluid>
                    <Jumbotron>
                        <h1>Track your activities. Join a challenge. Find a friend.</h1>
                    </Jumbotron>
                    <Row>
                        <Col size="md-6">
                            <img src="/Images/bike-monkey.jpg" alt="Running" align="middle" width="800" height="400" />
                        </Col>
                        <Col size="md-6 sm-12">
                            <Link to="/login">
                                <SignUpBtn value="Login with existing account"/>
                            </Link>
                        </Col>
                    </Row>
                <Footer />
            </Container>
        );
    }
}

export default Landing;