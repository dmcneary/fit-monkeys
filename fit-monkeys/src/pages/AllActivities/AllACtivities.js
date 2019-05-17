import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ActsTable from "../../components/Table";
import "./AllActivities.css";
// import img from "../../Images/monkeypic.jpg"

const mockResponse = {
    data: [
        {
            _id: 'basgfahgsdnga',
            sport: "Running",
            date: "June 1, 2019",
            time: "8:00AM",
            title: "Canyon Run",
            description: "Run through Santa Monica Canyon",
            distance: "5 miles",
            duration: "1 hour"
        },
        {
            _id: 'basgfahgsdnga',
            sport: "Running",
            date: "June 1, 2019",
            time: "8:00AM",
            title: "Canyon Run",
            description: "Run through Santa Monica Canyon",
            distance: "5 miles",
            duration: "1 hour"
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
                <Header>

                </Header>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container text-center">
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
                {/* <Footer>

                </Footer> */}
            </div>
        )
    }
}

export default AllActivities;