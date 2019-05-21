import React, { Component } from "react";
import "./ActivityDetail.css";
import axios from "axios";
import { Row, Container } from "../../components/Grid";

 class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activity: {}
        }
    }

    componentDidMount() {
        axios.get("/api/activities/" + this.props.match.params.id)
            .then(res => { this.setState({ activity: res.data }) })
            .catch(err => { console.log(err) })
    }

    render() {
        return(
            <Container fluid>
                <Row>
                    <h3>{this.state.activity.actTitle}</h3>
                    <h4>by {this.state.activity.userId}</h4>
                </Row>
                <Row>
                    <p>Created {this.state.activity.actDate}</p>
                </Row>
                <Row>
                    <div className="col-xs-12 col-md-8">
                        <p>insert leaflet map drawing here</p>
                        <p>{this.state.activity.actDesc}</p>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <p>Type of activity: {this.state.activity.sportType}</p>
                        <p>Duration: {this.state.activity.durationMins} minutes, {this.state.activity.durationSecs} seconds</p>
                        <p>Distance: {this.state.activity.distance}</p>
                    </div>
                </Row>

            </Container>
        )
    }
 }

 export default Detail;