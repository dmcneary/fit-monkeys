import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import ActsTable from "../../components/Table";
import "./AllActivities.css";
// import img from "../../Images/monkeypic.jpg"

const mockResponse = {
    data: [
        {
            _id: '1',
            user: "Road Runner 77",
            sport: "Cycling",
            date: "July 26, 2019",
            time: "7:15 AM",
            title: "Griffith Park",
            description: "Cycling through Griffith Park",
            distance: "17 miles",
            duration: "1.5 hour"
        },
        {
            _id: '2',
            user: "speedDemon",
            sport: "Running",
            date: "June 1, 2019",
            time: "8:00 AM",
            title: "Canyon Run",
            description: "Run through Santa Monica Canyon",
            distance: "5 miles",
            duration: "1 hour"
        },
        {
            _id: '3',
            user: "Hiking Dude 22",
            sport: "Hiking",
            date: "May 29th, 2019",
            time: "2:00 PM",
            title: "Topanga Hike",
            description: "Hike through Topanga State Park",
            distance: "4 miles",
            duration: "2 hour"
        },
        {
            _id: '4',
            user: "Surfer Chick",
            sport: "Surfing",
            date: "June 11th, 2019",
            time: "6:00 AM",
            title: "Surfing Trip",
            description: "Zuma Beach",
            distance: "as many waves as possible",
            duration: "2.5 hour"
        }

    ],
}

const mockApi = {
    getActs() {
        return new Promise((resolve, reject) => {
            resolve(mockResponse)
        })
    }
}

// sport, date/time, title, description, distance, duration
class AllActivities extends Component {

    state = {
        activities: [],
        sport: "",
        date: "",
        time: "",
        title: "",
        description: "",
        distance: "",
        duration: ""
    };

    componentDidMount() {
        this.loadActs();
    }

    loadActs = () => {
        mockApi.getActs()
            .then(res => {
                console.log('data received', res)
                /*
                res.data = [
                    {
                        sport: 'soccer',
                        date: '',
                        time: ''
                        ...
                    },
                    {
                        ...
                    },
                    ...
                ]
                */
                this.setState({
                    activities: res.data,
                    // sport: "", date: "", time: "",
                    // title: "", description: "", distance: "", duration: ""
                })
            })
            .catch(err => console.log(err));
    };

    deleteAct = id => {
        // API.deleteAct(id)
        //     .then(res => this.loadAct())
        //     .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.sport && this.state.date && this.state.time && this.state.title
            && this.state.description && this.state.distance && this.state.duration) {
            // API.saveActs({
            //     sport: this.state.sport,
            //     date: this.state.date,
            //     time: this.state.time,
            //     title: this.state.title,
            //     description: this.state.description,
            //     distance: this.state.distance,
            //     duration: this.state.duration
            // })
            // .then(res => this.loadActs())
            // .catch(err => console.log(err));
        }
    };


    render() {
        console.log(this.state.activities)
        return (
            // sport, date, time, title, description, distance, duration
            <div>
              
                <div class="jumbotron jumbotron-fluid jumboAct">
                    <div class="container text-center">
                    <br /><br /><br />
                        <h1 class="display-4">Featured Activities</h1>
                        <p class="lead"></p>
                    </div>
                </div>
                <ActsTable activities={this.state.activities} />
                {/* {this.state.activities.map(activity => (
                    <ActsTable key={activity._id}>
                        <a href={"/activities/" + activity._id}>
                            <strong>
                                {activity.sport}
                                {activity.date}
                                {activity.time}
                                {activity.description}
                                {activity.distance}
                                {activity.duration}
                            </strong>
                        </a>    
                    </ActsTable>
                ))} */}
             
            </div>
        )
    }
}

export default AllActivities;