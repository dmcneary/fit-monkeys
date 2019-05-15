import React, { Component } from "react";
// import SignUpBtn from "../../components/Buttons/SignUp";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Card from "../../components/Card"
import ChallengeCard from "../../components/ChallengeCard"
import { Col, Row, Container } from "../../components/Grid";
// import Image from "../../Images"
import Wrapper from "../../components/Wrapper";
import card from "../../utils/card.json";
import img from "../../Images/monkeypic.jpg"
import CardBtn from "../../components/CardBtn/CardBtn";
// import img1 from "../../Images/bike-monkey.jpg"
// import img2 from "../../Images/monkey-on-bicycle-5.png"


class Challenge extends Component {

    state = {
        card
    };

    removeCard = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const card = this.state.card.filter(card => card.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ card });
    };

    render() {
        return (
            <div>
                <Header>

                </Header>

                <Wrapper>
                    {this.state.card.map(card => (
                        <ChallengeCard
                            removeCard={this.removeCard}
                            id={card.id}
                            key={card.id}
                            name={card.name}
                            image={card.image}
                            bananas={card.bananas}
                            location={card.location}
                        />
                      
                    ))}
                    
                </Wrapper>
                <Footer>

                </Footer>
            </div>
        );
    }
}

export default Challenge;