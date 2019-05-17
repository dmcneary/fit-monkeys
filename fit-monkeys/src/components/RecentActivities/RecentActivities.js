import React, { Component } from "react";

class RecentUserActivites extends Component {

    state = {
        activities: []
    }

    /*componentDidMount() {
        this.getRecentActivities();
      }

    getRecentActivities = () => {
        API.getUserActivities()
          .then(res =>
            this.setState({
              activities: res.data
            })
          )
          .catch(err => console.log(err));
      };*/

    render() {
      return (
          <div className="media">
            <img className="mr-3" src="https://staticmapmaker.com/img/google.png" length="250" width="250" alt="placeholder image" />
            <div className="media-body">
              <h5 className="mt-0">Sample Activity</h5>
              <p>Descripion, elevation, distance, etc.<br />
              (Pull actvities for user from db)</p>
            </div>
          </div>
      );
    }
}

export default RecentUserActivites;