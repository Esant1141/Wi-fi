import React from "react";
import "./fixed.css";
// import { Link } from "react-router-dom";
import {  Container, Row } from "react-bootstrap";
import Layout from "../../../../layout";

function Hooks() {
  // const fixed = [
  //   {
  //     tittle1: "FIXED WI-FI BROADBAND",
  //     tittle2: "angular.png",
  //     tittle3: "hr",
  //   },
  //   {
  //     tittle1: "Broadband On Ethernet",
  //     tittle2: "angular.png",
  //     tittle3: "hr",
  //   },
  //   {
  //     tittle1: "Broadband On Fiber",
  //     tittle2: "angular.png",
  //     tittle3: "hr",
  //   },
  //   {
  //     tittle1: "Direct Internet Access (DIA)",
  //     tittle2: "angular.png",
  //     tittle3: "hr",
  //   },
  // ];
  // const fuctionFixed = (item) => {
  //   return (
  //     <>
  //       <Link to="/" className="itt">
  //         {item.tittle1}
  //       </Link>
  //       <div className="title " style={{ marginTop: "-100px" }}>
  //         <img className="title2" src={item.tittle2} alt="" />
  //         <br />
  //       </div>
  //     </>
  //   );
  // };
  return (
    <>
      <Layout>
      <Container className="fiber-container" fluid>
        <Row><div>Fixed</div>
          <div>Comming Soon!</div>
        </Row>
      </Container>
        {/* <div style={{ width: "100%" }}>
          <img className="image" src="img/multi.jpg" alt="" />
        </div>
        <div style={{ backgroundColor: "white" }} className="container-fluid">
          <div className="container">
            <hr style={{ marginTop: "60px" }} />
            <div className="row">
              <div className="col-md-3">
                <p className="PRODUCTS">PRODUCTS</p>
                {fixed.map(fuctionFixed)}
                <div className="crd ">
                  <p className="work">WORKING TIME:</p>
                  <div className="crd2 ">
                    <Card className="fixed-card ">
                      <p className="office">OFFICE WORK TIME:</p>
                      <p className="mon">
                        {" "}
                        Mon-sat: 10:30am - 7:00pm Sunday: Weekly Off
                      </p>
                    </Card>
                  </div>
                  <div className="crd2 ">
                    <Card className="fixed-card">
                      <p className="office">CORPORATE OFFICE::</p>
                      <p className="mon">
                        {" "}
                        U-13, Ist Floor Redcross Medical Market,Near District
                        Hospital, MS Road, Morena (Madhya Pradesh) 476001
                      </p>
                    </Card>
                  </div>
                  <div className="crd2">
                    <Card className="fixed-card">
                      <p className="office">CORPORATE OFFICE::</p>
                      <p className="mon">
                        +91 9587459111
                        <br />
                        +91 9982722331
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <p className="FIXED">FIXED WI-FI BROADBAND</p>
                <div className="container">
                  <div className="row">
                    <p className="wireless">
                      Fixed Wireless Broadband provides an Internet connection
                      via a wireless antenna system. An antenna is installed on
                      your roof with an attached radio receiver/transmitter.
                      This antenna is pointed at a nearby Access Point tower,
                      and must have a clear line of sight (no trees, buildings,
                      or hills blocking the path). When you send and receive
                      information over the Internet, it goes over the wireless
                      link from your radio/antenna to our Access Point. From
                      there that information travels over our “backhaul,” which
                      is a point-to-point wireless link to a fiberoptic
                      connection hooked directly to the Internet. City Broadband
                      service has very low “latency” (or delay) compared to
                      satellite Internet, where signals must travel thousands of
                      miles into space.
                    </p>
                    <p className="FIXED2">HOW IT IS WORK?</p>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Layout>
    </>
  );
}

export default Hooks;
