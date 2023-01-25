import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { BsChevronDoubleRight } from "react-icons/bs";

const infoData = [
    {
      t1: "img/sol1.jpg",
      t2: "FIXED WI-FI BROADBAND",
      t3: "Lazygone Wifi solution offer Internet access to all in its range of coverage. Our Hot Spots are available at participating airports, hotels... ",
    },
    {
      t1: "img/sol2.jpg",
      t2: "ETHERNET BROADBAND",
      t3: "Our expert Lazygone technicians make it easy to install your new Lazygone equipment",
    },
    {
      t1: "img/sol3.jpg",
      t2: "BUILDING ENROLLMENT",
      t3: "Pressure washing a Lazygone is an effective way to remove dirt and even algae",
    },
    {
      t1: "img/sol4.jpg",
      t2: "FIBER BROADBAND",
      t3: "Lazygone service network is spread across Moradabad, it is present in and is constantly expanding to cover...",
    },
    {
      t1: "img/sol5.jpg",
      t2: "DIA-LL (DIRECT INTERNET ACCESS)",
      t3: "Lazygone Internet Leased Line gives you the independence of a dedicated and secured data connectivity, Gives your...",
    },
    {
      t1: "img/sol6.jpg",
      t2: "TECHNICAL SUPPORT?",
      t3: "We're eager to resolve all issues in a timely manner. If you feel something didn't go well, open a complaint no via our team and we will rectify it ASAP.",
    },
  ];
  const infoFunction = (items) => {
    return (
      <>
        <Col>
          <Card.Img
            className="infosaol-card-img"
            variant="top"
            src={items.t1}
            alt=""
          />
          <Card.Title className="infosol-main-title">{items.t2}</Card.Title>
          <Card.Text className="infosol-title">
            <p>{items.t3}</p>
            <i>
              <BsChevronDoubleRight />
            </i>
          </Card.Text>
        </Col>
      </>
    );
  };
  export const infoMainFunction = infoData.map(infoFunction)