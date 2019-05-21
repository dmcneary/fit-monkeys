import React, { Component } from "react";
import axios from "axios";
import { Input, TextArea } from "../../components/Form";
import { Row, Container } from "../../components/Grid";
import "./NewActivity.css"

class NewActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actTitle: "",
            actDesc: "",
            durationMins: 0,
            durationSecs: 0,
            distance: 0,
            sportType: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        console.log(this.props.username);
        console.log(this.state.username);
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
                this.setState({message: "Something went wrong...oops! Please try again later."})
			})
    }
    
    render() {
        return(
            <Container fluid>
                <Row>
                    <div className="col-xs-12 col-md-6 mx-auto">
                        <form>
                        <p>Activity title: </p>
                        <Input value={this.state.actTitle}
                        onChange={this.handleInputChange}
                        name="actTitle"
                        placeholder="Name your activity"/>
                        <p>Activity description: </p>
                        <TextArea value={this.state.actDesc}
                        onChange={this.handleInputChange}
                        name="actDesc"
                        placeholder="Describe this activity (how did it go? how were you feeling?)"/>
                        <p>Date: </p>
                        <Input type="date" value={this.state.actDate}
                        onChange={this.handleInputChange}
                        name="date"/>
                        <p>Duration: </p>
                        <Input value={this.state.durationMins}
                        onChange={this.handleInputChange}
                        name="durationMins" size="2"/> Minutes 
                        <Input value={this.state.durationSecs}
                        onChange={this.handleInputChange}
                        name="durationSecs" size="2"/> Seconds
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