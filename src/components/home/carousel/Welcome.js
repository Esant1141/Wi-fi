import React from "react";
import { Container } from "react-bootstrap";
import "./wel-car.css";

const Welcome = () => {
  return (
    <Container fluid style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="row">
          <p className="welcome-heading">Welcome to Lazygone broadband</p>
          <p className="welcome-para">
            Lazygone Private Limited provides high speed broadband" Internet
            services across the city of Moradabad. Since its launch in 2015, Lazygone, through its path-breaking speeds and competitively prices
            plans, is today the largest and most contending ISP in Moradabad and We have 4000+ satisfied customers.
            <br />
            Starting off small in 2015, Lazygone forayed into providing
            super fast internet services to the Moradabad clientele. Lazygone
            has become synonymous with high speed internet at value prices.
            Having offered the most affordable value for money plans to their
            customers in Moradabad over the years, Lazygone witnessed a 100%
            growth in its subscriber base in 2018, and a phenomenal 120% growth
            in 2019.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
