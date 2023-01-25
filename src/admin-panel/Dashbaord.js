import React from "react";
import { Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
import "./dashbaord.css";

const Dashbaord = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div
          className="main-background">
          <div className="background">
            <div className="topbar"></div>
            <Container>Dashbaord Page</Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashbaord;
