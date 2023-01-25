import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const StickyFooter = () => (
  <footer className="footer">
    <div className="display-footer">
      <div className="footer-div-menu">
        <Link className="ii3" to="/new-collection">
          New Collection
        </Link>
      </div>
      <div className="footer-div-menu1">
        <Link className="ii3" to="/bill-payment">
          Bill Pay
        </Link>
      </div>
      <div className="footer-div-menu2">
        <a className="back-top" href="#nav">
          <div className="ii2">
            <i className="far ii2">&#xf151;</i>
          </div>
        </a>
      </div>
    </div>
  </footer>
);

export default StickyFooter;
