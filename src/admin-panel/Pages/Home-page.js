import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../dashbaord.css";
import Sidebar from "../../Sidebar";

const HomePage = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="main-background" >
          <div className="background">
            <div className="topbar"></div>
            <Container className="container-form">
              <Row>
                <Col sm={6}>
                  <label>Website Name</label>{" "}
                  <input
                    className="input-dashboard"
                    placeholder="Website Name..."
                  />
                </Col>
                <Col sm={6}>
                  <label>Logo Name</label>
                  <input
                    className="input-dashboard"
                    placeholder="Logo Name..."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <label>Contact No.1</label>{" "}
                  <input
                    className="input-dashboard"
                    placeholder="Contact No....."
                  />
                </Col>
                <Col sm={6}>
                  <label>Contact No.2</label>
                  <input
                    className="input-dashboard"
                    placeholder="Contact No....."
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <label>Tag Name</label>
                  <input
                    className="input-dashboard"
                    placeholder="website-name"
                  />
                </Col>
                <Col sm={4}>
                  <label>Tag Image</label>
                  <input
                    className="input-dashboard"
                    placeholder="website-name"
                  />
                </Col>
                <Col sm={4}>
                  <label>Timming: </label>
                  <input className="input-dashboard" placeholder="Timming" />
                </Col>
              </Row>
              <Row className="btn-dashboard">
                <input type="button" value="save" placeholder="Timming" />
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
