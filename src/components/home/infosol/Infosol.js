
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./infosol.css";
import {infoMainFunction} from "./InfoArray"

function Infosol() {
  return (
    <>
      <Container fluid className="infosol-fluid">
        <Container>
          <p className="infosol-heading">The Lazygone Formula</p>
          <Row xs={1} md={3} className="g-4 infosol-row">
            {infoMainFunction}
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Infosol;
