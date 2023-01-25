import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Modal1 from "./Modal";
import "./skew.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const imgPlan = [
  {}
]

export const planPriceMenu = [
  {
    title: "Entertainment",
    ud: "Unlimited Data",
    ott: "OTT-5",
    speed: "Upto 50mbps",
    channel: "100+ Live Channel",
    price: "Monthly Rental ₹499",
    // img:"img/altbalaji.png"
  },
  {
    title: "Basic",
    ud: "Unlimited Data",
    ott: "OTT-8",
    speed: "Upto 100mbps",
    channel: "100+ Live Channel",
    price: "Monthly Rental ₹799",
    // img:"img/epic.png"
  },
  {
    title: "Standard",
    ud: "Unlimited Data",
    ott: "OTT-10",
    speed: "Upto 150mbps",
    channel: "100+ Live Channel",
    price: "Monthly Rental ₹999",
    // img:"img/erosenow.png"
  },
  {
    title: "Professional",
    ud: "Unlimited Data",
    ott: "OTT-12",
    speed: "Upto 200mbps",
    channel: "100+ Live Channel",
    price: "Monthly Rental ₹1399",
    // img:"img/dollywood.webp"
  },

];
const planPriceFunction = (item) => {
  return (
    // <Carousel.Item>
    //   <Carousel.Caption>fghjedrtfghxdcfgvhb</Carousel.Caption>
    // </Carousel.Item>

    <Carousel.Item className="carouselslide">
      <Carousel.Caption className="slide-caption">
        <h3>{item.title}</h3>
        <Row className="row-buy-btn">
          <Col sm={3}>{item.ud}</Col>

          <Col sm={3} className="btn-buy-div">
            {item.ott}
          </Col>
          <Col sm={3} className="btn-buy-div">
            {item.speed}{" "}
          </Col>
          <Col sm={3} className="btn-buy-div">
            {item.channel}
          </Col>
          <hr />
          <p>Includes Lazygone benefit</p>
        </Row>
        <div className="scrollmenu">
          <div>
            <img width={"50px"} src="img/altbalaji.png" alt="" />
            <p>ALTbalaji</p>
          </div>
          <div>
            <img width={"50px"} src="img/epic.png" alt="" />
            <p>Epic on</p>
          </div>
          <div>
            <img width={"50px"} src="img/erosenow.png" alt="" />
            <p>erosenow</p>
          </div>
          <div>
            <img width={"70px"} src="img/dollywood.webp" alt="" />
            <p>dollywood</p>
          </div>{" "}
          <div>
            <img width={"70px"} src="img/dr.png" alt="" />
            <p>DR Happiness</p>
          </div>{" "}
        </div>
        <Row className="row-buy-btn">
          <Col sm={6}>{item.price}</Col>
          <Col sm={6} className="btn-buy-div">
            <Link to="/buy">
              {" "}
              <Button className="btn-buy">BUY NOW</Button>
            </Link>
          </Col>
        </Row>
      </Carousel.Caption>
    </Carousel.Item>
  );
};
export const mainSkewFun = planPriceMenu.map(planPriceFunction);
