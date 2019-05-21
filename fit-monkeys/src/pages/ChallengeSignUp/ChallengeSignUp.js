import React, { Component } from "react";
import Alert from "../../components/Alert"
import ChallengeForm from "../../components/ChallengeForm"
import { Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import "./ChallengeSignUp.css";
import { Jumbotron } from "react-bootstrap";


class ChallengeSignup extends Component {

	

    render() {
        return (
        <Container fluid>
        <Jumbotron fluid className="JumboSign">
                    <Container>
                        <br /><br /><br />
                        <h1 className="text-center">Challenge Sign Up</h1>
                    </Container>
                </Jumbotron>
                <ChallengeForm />
            <Row>
            </Row>
        </Container>
        );
    }
}

export default ChallengeSignup;