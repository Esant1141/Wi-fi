import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../../Sidebar";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, message } = user;
    if (name && email && phone && address && message) {
      const res = await fetch(
        "https://register-form-1161d-default-rtdb.firebaseio.com/registerform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Data stored successfully");
      }
    } else {
      alert("Please fill all the data");
    }
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
            <form className="form-register" method="POST">
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                  <label className="label-register">Name</label>{" "}
                  <input
                    value={user.name}
                    name="name"
                    className="input-dashboard"
                    placeholder="Name..."
                    onChange={getUserData}
                    required
                    autoComplete="off"
                  />
                </div>
                &nbsp;&nbsp;&nbsp;
                <div style={{ width: "100%" }}>
                  <label className="label-register">Email</label>
                  <input
                    value={user.email}
                    name="email"
                    type="email"
                    className="input-dashboard"
                    placeholder="Email..."
                    onChange={getUserData}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                  <label className="label-register">Phone</label>{" "}
                  <input
                    value={user.phone}
                    name="phone"
                    type="number"
                    className="input-dashboard"
                    placeholder="Phone....."
                    onChange={getUserData}
                    required
                    autoComplete="off"
                  />
                </div>
                &nbsp;&nbsp;&nbsp;
                <div style={{ width: "100%" }}>
                  <label className="label-register">Address</label>
                  <input
                    value={user.address}
                    name="address"
                    type="text"
                    className="input-dashboard"
                    placeholder="Address....."
                    onChange={getUserData}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              <label className="label-register">Message</label>
              <input
                value={user.message}
                name="message"
                className="input-dashboard"
                placeholder="Message"
                onChange={getUserData}
                required
                autoComplete="off"
              />
              <input
                className="btn-register"
                type="submit"
                value="save"
                onClick={postData}
                placeholder="Timming"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
