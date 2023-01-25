import React from "react";
import "./terms.css"

function Home() {
  const termCondition = [
    "Service installation for new connection will be done within 3-4 working days after complete of filled KYC form with all required document and receipt of initial payment. In case of cheque payment, service installation will do after realization in company bank account",
    "One Month advance security deposit will be applicable with new connection as per monthly package for auto recharge facilities. And this amount will be 100% refundable after clear all dues and return of all CPE Equipments.",
    "Speeds indicated are only up to our ISP node, given on best efforts basis as per TRAI guideline.",
    "**Speed reduces in to 512 Kbps after FUP data. *** Speed reduces in to 1 Mbps after FUP data. **** Speed reduces in to 2 Mbps after FUP data.",
    "After FUP data usage, you can still download UNLIMITED with reducing speed as per plan",
    "Customer Premise Equipment (CPE) means the equipment, systems, cabling and facilities provided to the Subscriber on returnable basis by the company, which is required for Service provisioning and used in conjunction with the Service Equipment in order to avail of the Service.",
    "The company would charge the subscriber Rs. 3000/- per CPE equipments not returned or returned in non-working condition towards penalty/damages for breach of the terms of service.",
    "All CPE equipments will provide by us for connection same will be returned to the company at the time of disconnection",
    "Company does not sell any CPE Equipments to subscriber or customer. It provided by company without any cost and security deposit for service usages purpose only till connection is running. Customer or subscriber shall compulsorily return all the CPE equipments to the company at the time of service /connection disconnection or discontinue to any other reason.",
    "Activation/Registration charges will applicable with every new connection as per actual for Residential & Home User and Business & SME User.",
    "Activation and Installation charges are not refundable and it is not related to CPE cost",
    "Company will not charge any rental or security deposit against their CPE equipments.",
    "Company reserves the right to dismount and recover all CPE equipments from subscriber/customer location at the time of service /connection disconnection or discontinue.",
    "Company provides fully onsite replacement to all CPE equipment (Cable & DC Adaptor not covered) till connection is running but thefting & physical damaged not covered.",
    "Company will not provide any Wired/Wi-Fi router with the connection, customer or subscriber will arrange and purchase from market itself.",
    "Company will not provide any Wired/Wi-Fi router with the connection, customer or subscriber will arrange and purchase from market itself.",
    "All plan speed measured in Kilobits per second (Kbps) or Megabit per second (Mbps), not in Kilobyte per second (KBPS) or Megabyte per second (MBPS)",
    "Please also note all the Internet Browser software is measure download speed in KBPS (Kilo Byte per Second) so kindly divided your plan speed by 8 to calculate proper download speed in all browsers only.",
    "All Plan Packs Price are and activation charges are inclusive of tax (GST) and subject to change in future.",
    "Contention ratio for scheme are set as 1:50 for home user and for business user 1:30 as per guideline set by TRAI & DOT.",
    "Download & Upload ratio 1:2 in Home & Residential user's packages and 1:1 in Business & SME user's packages.",
    "Minimum guaranteed speed availability 75% in Residential & Home user's Packages and 90% in Business & SME user's packages.",
    "All the Plane pack mentioned here are subject to regulatory approval.",
    "Company reserves the right to withdraw/Suspend/Modify & Alter /Cancel/Change the packages MRP without any prior notice or information",
    "Please read carefully data usages and transfer calculation in every FUP Plans. Speed and Data usage limit subject to company Fair Usage Policy",
    "In Residential & Home Packages FUP Data limited will be calculate Based on data transfer (Download & Upload) both.",
    "In Business & SME Packages FUP Data limited will be calculate Based on Download only Upload will not calculated in FUP .",
    "Refund, if applicable will be processed within 15 working from the date of cancellation or disconnection and settlements of all dues.",
    "Exclusive GST Tax - 18%",
  ];
  const termFunction = (items) => {
    return <li className="li-terms">{items}</li>;
  };
  return (
    <>
      <div className="container-fluid table-container">
        <h1 className="terms-heading">
          General & Commercial Terms & Conditions
        </h1>
        <div className="container">
          <div className="row">
            <ul>{termCondition.map(termFunction)}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
