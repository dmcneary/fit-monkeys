import React from 'react';
import './Dashboard.css';
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarLoggedIn";
import RecentActivities from "../../components/RecentActivities";
import Totals from "../../components/Totals";
import { Col, Row, Container } from "../../components/Grid";

const Dashboard = () => {
  return(
    <Container fluid>
      <Navbar />
      <Row>
        <Col size="8">
          <Jumbotron>
            <RecentActivities />
          </Jumbotron>
        </Col>
        <Col size="4">
          <Totals />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

  export default Dashboard;