import React, { Component } from "react";
import "./ActivityDetail.css";
import axios from "axios";
import { Container } from "../../components/Grid";

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
        return (
            <Container fluid>
                <div className="media">
                    <img className="mr-3" src="https://staticmapmaker.com/img/google.png" length="250" width="250" alt="placeholder" />
                    <div className="media-body">
                        <h3 className="mt-0">{this.state.activity.actTitle}</h3>
                        <h4>by {this.state.activity.userId}</h4>
                        <p>Created {this.state.activity.actDate}</p>
                        <hr />
                        <div className="col-xs-12 col-md-8">
                            <p>insert leaflet map drawing here</p>
                            <p>{this.state.activity.actDesc}</p>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <p>Type of activity: {this.state.activity.sportType}</p>
                            <p>Duration: {this.state.activity.durationMins} minutes, {this.state.activity.durationSecs} seconds</p>
                            <p>Distance: {this.state.activity.distance}</p>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Detail;