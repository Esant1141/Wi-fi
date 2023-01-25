import { Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import "./accor.css";

function BasicExample() {
  return (
    <>
      <div>
        <img style={{ width: "100%" }} src="img/career1.png" alt="" />
      </div>
      <div className="container-fluid first">
        <div className="row">
          <p className="index00">CAREERS</p>
          <p className="index0">
            Want to change the world and create a legacy?
          </p>
        </div>
      </div>
      <Accordion className="index" defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="head1">
          <Accordion.Header>
            <div className="drow">
              <p className="accor">1</p>
            </div>
            <p className="text2">
              APPLY TODAY AND BECOME PART OF SOMETHING SPECIAL.
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordian-1">
              We keep our team small and hire only the best. This is how we are
              fast and effective on the market.
              <p className="accordian-text1">
                Our core technical team drawn from various European countries
                has an in-depth hands-on knowledge of the Internet ecosystem
                around the world and helps our network become class-leading.
              </p>
              <p className="accordian-text1">
                If you believe you can be the best in any of the ISP operations
                areas, feel free to apply for some of our openings or just give
                us a call today.
              </p>
              <p className="accordian-text1">
                Presentable, hard working and well groomed male/female
                candidates with good communication skills. Please send your
                resume at given email id.
              </p>
              <p className="accordian-text1">
                Send resume to : shiv.parmar@citybroadband.in
              </p>
            </p>
            <div className="col">
              <img className="img4" src="img/current.gif" alt="" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Header>
          <div className="drow1">
            <p className="accor">2</p>
          </div>
          <p className="text2">
            CURRENT JOB OPENINGS HAVE REQUIRED CANDIDATES ON FOLLOWING POSTS
          </p>
          <div className="drive">
            <img className="img3" src="img/new.gif" alt="" />
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="route">
            <div style={{ padding: "10px" }}>
              <Card>
                <Card.Header>
                  <p>JOB RECRUITMENT INFO</p>
                </Card.Header>
                <Card.Body>
                  <div className="looping">
                    <img className="img1" src="img/a1.png" alt="" />
                  </div>
                  <Card.Title className="title">
                    SENIOR ACCOUNTANT M/F
                  </Card.Title>
                  <br />
                  <Card.Text>
                    <b> Qualification:</b> Graduates form any University and
                    experience must have telecom accounting & booking keeping
                    Total <p> Posts: 1</p>
                  </Card.Text>
                  <Button className="btn-career">
                    <Link className="btn-list-accor" to="/">APPLY NOW</Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div style={{ padding: "10px" }}>
              <Card>
                <Card.Header>
                  <p>JOB RECRUITMENT INFO</p>
                </Card.Header>
                <Card.Body>
                  <div className="looping">
                    <img className="img1" src="img/a1.png" alt="" />
                  </div>
                  <Card.Title className="title">
                    SENIOR ACCOUNTANT M/F
                  </Card.Title>
                  <br />
                  <Card.Text>
                    <b> Qualification:</b> Graduates form any University and
                    experience must have telecom accounting & booking keeping
                    Total <p> Posts: 2</p>
                  </Card.Text>
                  <Button className="btn-career">
                    <Link className="btn-list-accor" to="/">APPLY NOW</Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div style={{ padding: "10px" }}>
              <Card>
                <Card.Header>
                  <p>JOB RECRUITMENT INFO</p>
                </Card.Header>
                <Card.Body>
                  <div className="looping">
                    <img className="img1" src="img/a1.png" alt="" />
                  </div>
                  <Card.Title className="title">
                    SENIOR ACCOUNTANT M/F
                  </Card.Title>
                  <br />
                  <Card.Text>
                    <b> Qualification:</b> Graduates form any University and
                    experience must have telecom accounting & booking keeping
                    Total <p> Posts: 3</p>
                  </Card.Text>
                  <Button className="btn-career">
                    <Link className="btn-list-accor" to="/">APPLY NOW</Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div style={{ padding: "10px" }}>
              <Card>
                <Card.Header>
                  <p>JOB RECRUITMENT INFO</p>
                </Card.Header>
                <Card.Body>
                  <div className="looping">
                    <img className="img1" src="img/a1.png" alt="" />
                  </div>
                  <Card.Title className="title">
                    SENIOR ACCOUNTANT M/F
                  </Card.Title>
                  <br />
                  <Card.Text>
                    <b> Qualification:</b> Graduates form any University and
                    experience must have telecom accounting & booking keeping
                    Total <p> Posts: 4</p>
                  </Card.Text>
                  <Button className="btn-career">
                    <Link className="btn-list-accor" to="/">APPLY NOW</Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div style={{ padding: "10px" }}>
              <Card>
                <Card.Header>
                  <p>JOB RECRUITMENT INFO</p>
                </Card.Header>
                <Card.Body>
                  <div className="looping">
                    <img className="img1" src="img/a1.png" alt="" />
                  </div>
                  <Card.Title className="title">
                    SENIOR ACCOUNTANT M/F
                  </Card.Title>
                  <br />
                  <Card.Text>
                    <b> Qualification:</b> Graduates form any University and
                    experience must have telecom accounting & booking keeping
                    Total <p> Posts: 5</p>
                  </Card.Text>
                  <Button className="btn-career">
                    <Link className="btn-list-accor" to="/">APPLY NOW</Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          
        </Accordion.Body>
      </Accordion>
    </>
  );
}

export default BasicExample;
