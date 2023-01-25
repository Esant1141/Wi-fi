import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./forgot.css";

const ForgotPassword = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#282c34",
          height: "100vh",
          width: "100%",
          paddingTop: "100px",
        }}
      >
        <Row
          style={{
            marginLeft: "270px",
            padding: "0px",
            marginRight: "270px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <Col
            sm={6}
            style={{
              backgroundColor: "lightblue",
              borderBottomLeftRadius: "10px",
              borderTopLeftRadius: "10px",
              padding: "30px",
            }}
          ></Col>{" "}
          <Col sm={6} style={{ padding: "30px" }}>
            <p className="forgot-label1">Forgot Your Password?</p>
            <p className="forgot-label1">
              We get it, stuff happens. Just enter your email address below and
              we'll send you a link to reset your password!
            </p>
            <div className="register-btn-google">
              {" "}
              <hr />
              <input
                className="btn-forgot-input"
                value="Register with Google"
                type="text"
              />
              <hr />
            </div>
            <div className="register-btn-facebook">
              <Button className="btnf" type="submit">
                Register with Facebook
              </Button>
              <hr />
            </div>
            <p>Create an Account!</p>
            <p>Already have an account? Login!</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ForgotPassword;
