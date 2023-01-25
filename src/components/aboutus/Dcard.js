import React from "react";
import "./dcard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

export const Dcard = () => {
  const Carddy = [
    {
      image: "img/photo.png",
      title1: "Technician Name",
      title2: "Owner/Operator",
      title3: "With twenty years of experience in the broadband industry",
    },
    {
      image: "img/photo.png",
      title1: "Technician Name",
      title2: "broadband Technician",
      title3: "we have education in network and routers",
    },
    {
      image: "img/photo.png",
      title1: "Technician Name",
      title2: "Senior Administrator",
      title3: "As a lead of the company sets a high standard of organization",
    },
    {
      image: "img/photo.png",
      title1: "Technician Name",
      title2: "broadband Mechanic",
      title3: "With twenty years of experience in the broadband industry",
    },
  ];
  const renderCarddy = (cardo) => {
    return (
      <Col>
        <div>
          <div>
            <div className="resp1">
              <img src={cardo.image} alt="" />
            </div>
           <div  className="resp resp1"> <p style={{textAlign:"center",color:"#005395", fontWeight:"600",fontSize:"25px"}}>{cardo.title1}</p>
            <p style={{textAlign:"center"}}>{cardo.title2}</p>
            <p style={{textAlign:"center"}}>{cardo.title3}</p></div>
           
          </div>
        </div>
      </Col>
    );
  };

  return (
    <><Container fluid style={{backgroundColor:"white"}}>
      <Container>
        <p className="about">Our Team</p>
        <Row style={{paddingBottom:"100px"}}>{Carddy.map(renderCarddy)}</Row>{" "}
      </Container>
      </Container>
    </>
  );
};
