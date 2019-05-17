import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import Card from "../../components/Card"
import ChallengeCard from "../../components/ChallengeCard"
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
// import Image from "../../Images"
import card from "../../utils/card.json";
import img from "../../Images/monkeypic.jpg"
import img1 from "../../Images/bike-monkey.jpg"
import img2 from "../../Images/monkey-on-bicycle-5.png"
import "./Landing.css";


class Landing extends Component {

    state = {
        card
    };


    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1>Track your activities. Join a challenge. Find a friend.</h1>
                </Jumbotron>
                <Row>
                    <Col size="md-6">
                        <img src={img1} class="mx-auto d-block" alt="Running" align="middle" />
                        <img src={img} class="mx-auto d-block" alt="Running" align="middle" />
                        <img src={img2} class="mx-auto d-block" alt="Running" align="middle" />
                    </Col>
                    <Col size="md-6 xs-12">
                        <Link to="/user">
                            <button className="btn btn-primary">Register as a new user</button>
                        </Link>
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

export default Landing;