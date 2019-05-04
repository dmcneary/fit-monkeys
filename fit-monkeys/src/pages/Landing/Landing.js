import React, { Component } from "react";
// import SignUpBtn from "../../components/Buttons/SignUp";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Col, Row, Container } from "../../components/Grid";


class Landing extends Component {

    render() {
        return (
            <div>
                <Header>

                </Header>
                <Container fluid>
                    <Jumbotron>
                        <h1>Track your activities. Join a challenge. Find a friend.</h1>
                    </Jumbotron>
                    <Row>
                        <Col size="md-6">
                            <img src='https://www.macobserver.com/wp-content/uploads/2018/06/iphone-x-apple-maps.jpg' alt="Running" align="middle" width="800" height="400" />
                        </Col>
                        <Col size="md-6 sm-12">
                            {/* <SignUpBtn
                                onClick={this.handleFormSubmit}
                            >
                                Sign Up
                      </SignUpBtn> */}
                      <p>insert login button here</p>
                        </Col>
                    </Row>
                </Container>
                <Footer>

                </Footer>
            </div>
        );
    }
}

export default Landing;