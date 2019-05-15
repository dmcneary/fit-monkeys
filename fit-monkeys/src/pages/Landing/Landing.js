import React, { Component } from "react";
import SignUpBtn from "../../components/Buttons/SignUp";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
<<<<<<< HEAD
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
=======
import Header from "../../components/Header";
// import Card from "../../components/Card"
import ChallengeCard from "../../components/ChallengeCard"
import { Col, Row, Container } from "../../components/Grid";
// import Image from "../../Images"
import card from "../../utils/card.json";
import img from "../../Images/monkeypic.jpg"
import img1 from "../../Images/bike-monkey.jpg"
import img2 from "../../Images/monkey-on-bicycle-5.png"
import "./Landing.css";
>>>>>>> 5cd432cc09d295880acc98ca452915fa50f6dbb1


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
<<<<<<< HEAD
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
=======
                            <img src={img1} class="mx-auto d-block" alt="Running" align="middle"  />
                            <img src={img} class="mx-auto d-block" alt="Running" align="middle"  />
                            <img src={img2} class="mx-auto d-block" alt="Running" align="middle"  />
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
                {/* <ChallengeCard
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            bananas={card.bananas}
            location={card.location}
          /> */}
               
                <Footer>

                </Footer>
            </div>
>>>>>>> 5cd432cc09d295880acc98ca452915fa50f6dbb1
        );
    }
}

export default Landing;