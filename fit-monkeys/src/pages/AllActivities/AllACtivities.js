import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import img from "../../Images/monkeypic.jpg"

class AllActivities extends Component {

    render() {
        return (

            <div>
                <Header>

                </Header>
                <Jumbotron>
                    <h1>Featured Activities</h1>
                </Jumbotron>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Race Name</th>
                            <th>Type of Race</th>
                            <th>Date</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <th>Race Name</th>
                            <th>Type of Race</th>
                            <th>Date</th>
                            <th>Location</th>
                        </tr>
                        <tr>
                            <td>2</td>
                            <th>Race Name</th>
                            <th>Type of Race</th>
                            <th>Date</th>
                            <th>Location</th>
                        </tr>
                        <tr>
                            <th>Race Name</th>
                            <th>Type of Race</th>
                            <th>Date</th>
                            <th>Location</th>
                        </tr>
                    </tbody>
                </Table>
                <Footer>
                </Footer>
            </div>
        )
    }
}

export default AllActivities;