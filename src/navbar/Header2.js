import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoLocationSharp } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import "./header.css";
import { IoLogoWhatsapp } from "react-icons/io5";

function Header2() {
  return (
    <>
      <Container id="nav" fluid>
        <Row>
          <Col className="top-header-lazygone" sm={3}>
            <IoLocationSharp /> NETWORK AREA
          </Col>
          <Col className="header2-col" sm={9}>
            <Marquee gradientColor="tranparent" className="marq">
              <span>Service For MORADABAD (UP)</span>
              <span>
                <IoLogoWhatsapp className="whatsicon" />
              </span>
              &nbsp;/ &nbsp;
              <span>+91 8477098105</span>
              <span className="twoo">
                <img className="top-header-icon" src="img/i6.png" alt="" />
              </span>
              &nbsp;/ &nbsp;
              <span>+91 8171100471</span> &nbsp;/ &nbsp;<span>+91 9456212342</span>
            </Marquee>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header2;
