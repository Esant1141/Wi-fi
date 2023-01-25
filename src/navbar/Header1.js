import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoLogoWhatsapp } from "react-icons/io5";
import "./header.css";

function BrandExample() {
  return (
    <><Container fluid style={{backgroundColor:"white"}}>
      <Container>
        <Row className="header2-padding">
          <Col className="one" sm={5}>
            <span style={{ color: "#cc3333", fontSize: "20px" }}>
              <i>Get the internet at</i>
            </span>
            <img src="img/i4.png" alt="" />
          </Col>
          <Col sm={3}>
            <img className="logolazy" src="img/lg.png" alt="" />
          </Col>
          <Col sm={4}>
            <span className="numspan">
              <IoLogoWhatsapp
                style={{ fontSize: "47px", color: "grey", paddingTop: "10px" }}
              />
              <img
                style={{ width: "35px", height: "45px", paddingTop: "12px" }}
                src="img/i6.png"
                alt=""
              />
              <ul className="number">
                <li>+91 8477098105</li>
                <li>+91 8171100471</li>
                <li>+91 9456212342</li>
              </ul>          
            </span>
            <p className="num">
              (MONDAY TO SATURDAY 9 AM TO 7 PM)
            </p>
          </Col>
        </Row>
      </Container>
      </Container>
    </>
  );
}

export default BrandExample;
