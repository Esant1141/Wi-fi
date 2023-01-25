import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="main-div Many">
          <div className="contact-info"></div>
          <p className="in">Contact information</p>
          <hr></hr>
          <p>
            <Link to="/" className="try">Sign in to Google</Link> to save your
            progress.<Link to="/" className="try">Learn more</Link>{" "}
          </p>
          <p className="follow">* Required</p>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Applied Post <p className="lazygone">*</p>
          </p>
          <input placeholder="choose" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Name <p className="lazygone1">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Date Of Birth <p className="lazygone">*</p>
          </p>
          <input placeholder="Birth" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Gender <p className="lazygone2">*</p>
          </p>
          <input className="radio" type="radio"></input>:Femalep
          <br></br>
          <input className="radio" type="radio"></input>:Male
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Marital Status
            <p className="lazygone3">*</p>
          </p>
          <input className="radio" type="radio"></input>:Married
          <br></br>
          <input className="radio" type="radio"></input>:Unmarried
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Mobile no <p className="lazygone4">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            PAN No. <p className="lazygone5">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Adhar Card No.
            <p className="lazygone6">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            D/L No. <p className="lazygone5">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">Voter ID Card No.</p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Father's Name
            <p className="lazygone6">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Mother's Name
            <p className="lazygone7">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Current Address
            <p className="lazygone8">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            Permanent Address
            <p className="lazygone9">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>

      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            E-mail
            <p className="lazygone1">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>


      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            City
            <p className="lazygone10">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>


      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
          District
            <p className="lazygone2">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>


      
      <div className="container">
        <div className="main-div1 Many">
          <p className="menu">
            State
            <p className="lazygone1">*</p>
          </p>
          <input placeholder="Your Answer" className="t"></input>
        </div>
      </div>


      <div className="container">
        <div className="main">
        <Button className="bt1" variant="primary">Submit</Button>{' '}
        <div className="bt2"></div>
        <p className="text">Page 1 of 1
</p>
<Link to="/" className="text1">Clear form</Link>
<p className="text2">Never submit passwords through Google Forms.</p>
<p className="text3">This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy</p>
<p className="text4">Google Forms</p>

        </div>
      </div>
    </>
  );
}

export default Contact;
