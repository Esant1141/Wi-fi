import React from "react";
// import { Card } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Layout from "../../../../layout";

function Props() {
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
        <Row><div>Ethernet</div>
          <div>Comming Soon!</div>
        </Row>
      </Container>
        {/* <div>
          <img
            style={{ height: "330px", width: "100%" }}
            src="img/ether.jpg"
            alt=""
          />
        </div>
        <div style={{ backgroundColor: "white" }} className="container-fluid">
          <div className="container">
            <hr style={{ marginTop: "60px" }} />
            <div className="row">
              <div className="col-sm-3">
                {fixed.map(fuctionFixed)}
                <div className="crd ">
                  <p className="work">WORKING TIME:</p>
                  <div className="crd2 ">
                    <Card className="main ">
                      <p className="office">OFFICE WORK TIME:</p>
                      <p className="mon">
                        {" "}
                        Mon-sat: 10:30am - 7:00pm Sunday: Weekly Off
                      </p>
                    </Card>
                  </div>
                  <div className="crd2 ">
                    <Card className="rr">
                      <p className="office">CORPORATE OFFICE::</p>
                      <p className="mon">
                        {" "}
                        U-13, Ist Floor Redcross Medical Market,Near District
                        Hospital, MS Road, Morena (Madhya Pradesh) 476001
                      </p>
                    </Card>
                  </div>
                  <div className="crd2">
                    <Card className="main">
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
              <div className="col-sm-9">
                <p className="FIXED">BROADBAND ON ETHERNET</p>
                <h4>What is Cityinfosol Ethernet Broadband?</h4>
                <p style={{ fontSize: "1.1rem" }}>
                  cityinfosol Ethernet Broadband Service is an enterprise-grade
                  broadband internet technology. It provides robust, high-speed
                  data connectivity to cope with data-intensive applications
                  such as: operating multiple IP voice lines, Virtual Private
                  Networks (VPN), enterprise web hosting, file sharing and Local
                  area Network (LAN) connectivity.
                </p>
                <p style={{ fontSize: "1.1rem" }}>
                  Ethernet broadband is often considered a 'step up' from ADSL
                  broadband, offering data speeds that are typically faster than
                  a regular DSL connection. Uniquely, Ethernet speeds are
                  symmetrical (the same speed for upload and downloads) is
                  distinc from cityinfosol Broadband (which provides for
                  downloads at higher speeds than uploads). Symmetrical speed
                  can increase the performance of data-hungry services like IP
                  communications and enterprise file sharing.
                </p>
                <br />
                <h4>How fast is cityinfosol Ethernet Broadband?</h4>
                <p style={{ fontSize: "1.1rem" }}>
                  cityinfosol Ethernet Broadband services range from 10Mps
                  (megabytes per second) up to 100Mpbs. The final 'point' speed
                  will vary depending upon the nature and location of your
                  connection. In most cases, cityinfosol Broadband Ethernet is
                  delivered over fibre-optic infrastructure through a partner
                  network. If fibre is not available, an alternative fixed-line
                  solution may be recommended (SHDSL / Copper). In general,
                  Fibre-based Ethernet offers superior speed, scalability and
                  future-proof connectivity.
                </p>
                <br />
                <p style={{ fontSize: "1.1rem" }}>
                  It is important to understand that Ethernet speed will be
                  affected by the service location. Ethernet connections can
                  only be delivered in network availability areas. (For this
                  reason, Ethernet is sometimes called Metro Ethernet). Not all
                  premises will have access to Ethernet- capable infrastructure.
                </p>
                <div>
                  <img className="image2" src="how.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Layout>
    </>
  );
}

export default Props;
