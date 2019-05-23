import React, { Component } from "react";
import axios from "axios";
import { Input, TextArea } from "../../components/Form";
import { Row, Container } from "../../components/Grid";
import "./NewActivity.css";
import L from 'leaflet';
import * as Routing from "leaflet-routing-machine";

class NewActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLocation: {
                lat: 34.0522,
                lon: -118.2437
            },
            actTitle: "",
            actDesc: "",
            durationMins: 0,
            durationSecs: 0,
            distance: 0,
            sportType: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {

        //get user location
        const geoSuccess = (position) => {
            this.setState({
                userLocation: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
            })
        };
        navigator.geolocation.getCurrentPosition(geoSuccess);
        //leaflet map render
        const map = L.map('map').setView([this.state.userLocation.lat, this.state.userLocation.lon], 13);
        //base map layer
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ['a', 'b', 'c'],
            maxZoom: 17,
            minZoom: 9
        })
            .addTo(map);

        function createButton(label, container) {
            var btn = L.DomUtil.create('button', '', container);
            btn.setAttribute('type', 'button');
            btn.innerHTML = label;
            return btn;
        }

        L.Routing.control({
            waypoints: [
                L.latLng(57.74, 11.94),
                L.latLng(57.6792, 11.949)
            ],
            routeWhileDragging: true
            }).addTo(map);

        map.on('click', function (e) {
            var container = L.DomUtil.create('div'),
                startBtn = createButton('Start from this location', container),
                destBtn = createButton('Go to this location', container);
                
            L.DomEvent.on(startBtn, 'click', function () {
                control.spliceWaypoints(0, 1, e.latlng);
                map.closePopup();
            });

            L.DomEvent.on(destBtn, 'click', function () {
                control.spliceWaypoints(L.control.getWaypoints().length - 1, 1, e.latlng);
                map.closePopup();
            });
            L.popup()
                .setContent(container)
                .setLatLng(e.latlng)
                .openOn(map);
        });

        /*bike lanes
        L.tileLayer('http://tiles.mapc.org/trailmap-onroad/{z}/{x}/{y}.png', {
            maxZoom: 17,
            minZoom: 9
        })
            .addTo(map);*/
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const history = this.props.history
        console.log('new activity handleSubmit, username: ');
        console.log(this.props.username);
        //request to server to add new activity
        axios.post('/api/activities', {
            userId: this.props.username,
            actTitle: this.state.actTitle,
            actDesc: this.state.actDesc,
            actDate: this.state.actDate,
            durationMins: this.state.durationMins,
            durationSecs: this.state.durationSecs,
            distance: this.state.distance,
            sportType: this.state.sportType
        })
            .then(res => {
                console.log(res)
                if (!res.data.errmsg) { //redirect to activity detail page
                    console.log('activity create successful')
                    history.push("/activities/" + res.data._id);
                }
            }).catch(error => {
                console.log('activity creation error: ')
                console.log(error)
                this.setState({ message: "Something went wrong...oops! Please try again later." })
            })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <div className="col-xs-12 col-md-6 mx-auto" id="map"></div>
                    <div className="col-xs-12 col-md-6 mx-auto">
                        <form>
                            <p>Activity title: </p>
                            <Input value={this.state.actTitle}
                                onChange={this.handleInputChange}
                                name="actTitle"
                                placeholder="Name your activity" />
                            <p>Activity description: </p>
                            <TextArea value={this.state.actDesc}
                                onChange={this.handleInputChange}
                                name="actDesc"
                                placeholder="Describe this activity (how did it go? how were you feeling?)" />
                            <p>Date: </p>
                            <Input type="date" value={this.state.actDate}
                                onChange={this.handleInputChange}
                                name="date" />
                            <p>Duration: </p>
                            <Input value={this.state.durationMins}
                                onChange={this.handleInputChange}
                                name="durationMins" size="2" /> Minutes
                        <Input value={this.state.durationSecs}
                                onChange={this.handleInputChange}
                                name="durationSecs" size="2" /> Seconds
                        <p>Distance (in miles): </p>
                            <Input value={this.state.distance}
                                onChange={this.handleInputChange}
                                name="distance"
                                type="number" size="6" />
                            <p>Type of activity: </p>
                            <select name="sportType" onChange={this.handleInputChange}>
                                <option value="">--Please choose an option--</option>
                                <option value="hiking">Hiking</option>
                                <option value="running">Running</option>
                                <option value="cycling">Cycling</option>
                                <option value="swimming">Swimming</option>
                                <option value="rowing">Rowing</option>
                            </select>
                            <div className="submitBtn">
                                <button className="btn btn-success" onClick={this.handleSubmit} type="submit">Create Activity</button>
                            </div>
                        </form>

                    </div>
                </Row>
            </Container>
        )
    }
}

export default NewActivity;