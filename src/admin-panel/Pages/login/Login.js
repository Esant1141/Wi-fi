import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import Sidebar from "../../../Sidebar";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      {" "}
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="main-background">
          <div className="background">
            <div className="topbar"></div>
            <Container className="login-container" fluid>
              <Row className="login-row">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={user.name}
                      name="name"
                      onChange={getUserData}
                      type="text"
                      placeholder="Name"
                      autoComplete="off"
                    />
                    <Form.Text className="text-muted">
                      Enter your name
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      value={user.email}
                      name="email"
                      onChange={getUserData}
                      autoComplete="off"
                      type="email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile no.</Form.Label>
                    <Form.Control
                      value={user.mobile}
                      name="mobile"
                      onChange={getUserData}
                      type="number"
                      placeholder="Mobile number"
                      autoComplete="off"
                    />
                    <Form.Text className="text-muted">
                      Enter your mobile number
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      value={user.address}
                      name="address"
                      onChange={getUserData}
                      type="text"
                      placeholder="Address"
                      autoComplete="off"
                    />
                    <Form.Text className="text-muted">
                      Enter your Address
                    </Form.Text>
                  </Form.Group>
                  <div className="btn-login">
                    <Button
                      className="btnLogin"
                      variant="primary"
                      type="submit"
                    >
                      Login
                    </Button>
                  </div>
                  <div className="btn-login"></div>
                </Form>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
