import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Plan.css";

function Plancard() {
  const tableLazyGone = [
    {
      heading1: "PLAN999",
      heading2: "₹999*",
      tittle: "bandwidth",
      tittle2: "Data Usages",
      tittle3: "Butter Data/GB",
      title4: "promo data",
      tittle5: "Monthely Rent",
      tittle6: "FUP limit",
      heading3: "Instalation charger",
      heading4: "4k Android",
    },
    {
      heading1: "PLAN999",
      heading2: "₹999*",
      tittle: "bandwidth",
      tittle2: "Data Usages",
      tittle3: "Butter Data/GB",
      title4: "promo data",
      tittle5: "Monthely Rent",
      tittle6: "FUP limit",
      heading3: "Instalation charger",
      heading4: "4k Android",
    },
    {
      heading1: "PLAN999",
      heading2: "₹999*",
      tittle: "bandwidth",
      tittle2: "Data Usages",
      tittle3: "Butter Data/GB",
      title4: "promo data",
      tittle5: "Monthely Rent",
      tittle6: "FUP limit",
      heading3: "Instalation charger",
      heading4: "4k Android",
    },
    {
      heading1: "PLAN999",
      heading2: "₹999*",
      tittle: "bandwidth",
      tittle2: "Data Usages",
      tittle3: "Butter Data/GB",
      title4: "promo data",
      tittle5: "Monthely Rent",
      tittle6: "FUP limit",
      heading3: "Instalation charger",
      heading4: "4k Android",
    },
  ];
  const functionLazyGone = (item) => {
    return (
      <>
        <div className="col-md-3 card2 shadow-lg bg-white rounded">
          <div className="mainheading2">
            <p className="mainheading">{item.heading1}</p>
          </div>
          {/* <div className="heading2"> */}
            <p className="rupee">{item.heading2}</p>
          {/* </div> */}

          <Table className="aaa" responsive stripped bordered hover>
            <thead id="table1">
              <tr>
                <th style={{ borderLeft: "none", textAlign: "right" }}>
                  bandwidth
                </th>
                <td style={{ border: "none" }}>100 mbps</td>
              </tr>
              <tr>
                <th style={{ borderLeft: "none", textAlign: "right" }}>
                  Data Usages
                </th>
                <td style={{ border: "none" }}>Unlimited</td>
              </tr>
              <tr>
                <th style={{ borderLeft: "none", textAlign: "right" }}>
                  Butter Data/GB
                </th>
                <td style={{ border: "none" }}>Unlimited</td>
              </tr>
              <tr>
                <th style={{ borderLeft: "none", textAlign: "right" }}>
                  promo data
                </th>
                <td style={{ border: "none" }}>NA</td>
              </tr>
              <tr>
                <th style={{ borderLeft: "none", textAlign: "right" }}>
                  Monthely Rent
                </th>
                <td style={{ border: "none" }}>799*.00</td>
              </tr>
              <tr>
                <th style={{ borderLeft: "none", textAlign: "right" }}>
                  FUP limit
                </th>
                <td style={{ border: "none" }}>Unlimited</td>
              </tr>
              <tr>
                <th style={{ borderLeft: "none", textAlign: "right" }}>
                  Instalation charger
                </th>
                <td style={{ border: "none" }}>1000</td>
              </tr>
              <tr>
                <th style={{ borderLeft: "none", textAlign: "right" }}>
                  4k Androidr
                </th>
                <td style={{ border: "none" }}>NA</td>
              </tr>
            </thead>
          </Table>
          <Link to="/">
            {" "}
            <button className="buttn">APPLY NOW</button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container-fluid table-container">
        <h1 className="plan-heading">Select your network Name</h1>
        <div className="container">
          <div className="row padd">
            {tableLazyGone.map(functionLazyGone)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Plancard;
