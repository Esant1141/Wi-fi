// import React from "react";
// import { Link } from "react-router-dom";
// import "./footer.css";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const MainFooter = () => {
//   const MenuItem = [
//     "SITEMAP",
//     "CAREER",
//     "TERMS AND CONDITIONS",
//     "NEWS AND MEDIA",
//     "DISCOUNT/REFUND POLICY",
//     "TESTIMONIALS",
//     "TROUBLE-SHOOTING",
//   ];
//   const Add = [
//     {
//       t1: "img/loco2.png",
//       t2: "U-13, IST FLOOR REDCROSS MEDICAL MARKET,NEAR DISTRICT HOSPITAL, MS ROAD,MORENA (M.P.)",
//     },
//     {
//       t1: "img/loco2.png",
//       t2: "BHARATPUR: G-15 GROUND FLOOR KK PLAZA, BHANG WALI GALI, NEAR KOTWALI, BHARATPUR (RAJ.)",
//     },
//   ];
//   const Num = [
//     {
//       t1: "img/phone.png",
//       t2: "+91 9109114441",
//     },
//     {
//       t1: "img/phone.png",
//       t2: "+91 9982722331",
//     },
//   ];

//   const FunctionAdd = (item) => {
//     return (
//       <>
//         <p style={{ display: "flex" }}>
//           <li>
//             <img
//               style={{ width: "40px", height: "40px", padding: "5px" }}
//               src={item.t1}
//               alt=""
//             />
//           </li>
//           <li>{item.t2}</li>
//         </p>
//       </>
//     );
//   };
//   const FunctionNum = (item) => {
//     return (
//       <>
//         <p style={{ display: "flex" }}>
//           <li>
//             <img
//               style={{ width: "40px", height: "40px", padding: "5px" }}
//               src={item.t1}
//               alt=""
//             />
//           </li>
//           <li>{item.t2}</li>
//         </p>
//       </>
//     );
//   };
//   const MenuFunc = (item) => {
//     return (
//       <div>
//         <Link
//           style={{ color: "white", textDecoration: "none", marginLeft: "25px" }}
//           to="/"
//         >
//           {" "}
//           {item}
//         </Link>{" "}
//       </div>
//     );
//   };
//   return (
//     <>
//       <Container fluid colr>
//         <Container>
//           <div className="foot main">{MenuItem.map(MenuFunc)}</div>
//         </Container>
//         <hr style={{ color: "white" }} />
//         <Container>
//           <Row></Row>
//         </Container>
//       </Container>
//       <Container>
//         <Row>
//           <Col>
//             <ul style={{ color: "white", fontSize: "15px", listStyle: "none" }}>
//               {Add.map(FunctionAdd)}
//             </ul>
//           </Col>
//           <Col>
//             <img
//               style={{ width: "200px", marginLeft: "50px" }}
//               src="img/WHITElogo.png"
//               alt=""
//             />
//           </Col>
//           <Col>
//             <ul style={{ color: "white", fontSize: "22px", listStyle: "none" }}>
//               {Num.map(FunctionNum)}
//             </ul>
//           </Col>
//         </Row>
//         <hr style={{ color: "white" }} />
//         <div
//           style={{ textAlign: "center", color: "white", fontWeight: "600" }}
//           className="policy"
//         >
//           © City Broadband. All rights reserved.
//         </div>
//         <div
//           style={{
//             color: "white",
//             paddingBottom: "30px",
//             fontSize: "25px",
//             textAlign: "center",
//           }}
//         >
//           <span style={{ paddingLeft: "20px", paddingRight: "20px" }}>
//             <FaFacebook />
//           </span>
//           <span style={{ paddingLeft: "20px", paddingRight: "20px" }}>
//             <FaTwitter />
//           </span>
//           <span style={{ paddingLeft: "20px", paddingRight: "20px" }}>
//             <SiGmail />
//           </span>
//         </div>
//       </Container>
//       {/* <div className="container-fluid colr"> */}
//         {/* <div className="container">
//           <div className="foot main">{MenuItem.map(MenuFunc)}</div>
//         </div> */}

//         {/* <div className="container"> */}
//           {/* <div className="row lead3">
//             <div className="col-4">
//               <ul
//                 style={{ color: "white", fontSize: "15px", listStyle: "none" }}
//               >
//                 {Add.map(FunctionAdd)}
//               </ul>
//             </div>
//             <div className="col-4">
//               <img
//                 style={{ width: "200px", marginLeft: "50px" }}
//                 src="img/WHITElogo.png"
//                 alt=""
//               />
//             </div>
//             <div className="col-4">
//               <ul
//                 style={{ color: "white", fontSize: "22px", listStyle: "none" }}
//               >
//                 {Num.map(FunctionNum)}
//               </ul>
//             </div>
//           </div> */}
//         {/* </div> */}
//         {/* <hr style={{ color: "white" }} />
//         <div
//           style={{ textAlign: "center", color: "white", fontWeight: "600" }}
//           className="policy"
//         >
//           © City Broadband. All rights reserved.
//         </div>
//         <div
//           style={{
//             color: "white",
//             paddingBottom: "30px",
//             fontSize: "25px",
//             textAlign: "center",
//           }}
//         >
//           <span style={{ paddingLeft: "20px", paddingRight: "20px" }}>
//             <FaFacebook />
//           </span>
//           <span style={{ paddingLeft: "20px", paddingRight: "20px" }}>
//             <FaTwitter />
//           </span>
//           <span style={{ paddingLeft: "20px", paddingRight: "20px" }}>
//             <SiGmail />
//           </span>
//         </div> */}
//       {/* </div> */}
//     </>
//   );
// };
// export default MainFooter;

import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const MainFooter = () => {
  const MenuItem = [
    "SITEMAP",
    "CAREER",
    "TERMS AND CONDITIONS",
    "NEWS AND MEDIA",
    "DISCOUNT/REFUND POLICY",
    "TESTIMONIALS",
    "TROUBLE-SHOOTING",
  ];
  const Add = [
    {
      t1: "img/loco2.png",
      t2: "LazygoneNetwork private Ltd, Shree Shirdi Sai Complex 2nd Floor Kothiwal Nagar Distt - Moradabad (up) 244001",
    },
  ];
  const Num = [
    {
      t1: "img/phone.png",
      t2: "+91 8477098105",
    },
    {
      t1: "img/phone.png",
      t2: "+91 8171100471",
    },
  ];

  const FunctionAdd = (item) => {
    return (
      <>
        <p style={{ display: "flex" }}>
          <li>
            <img
              style={{ width: "40px", height: "40px", padding: "5px" }}
              src={item.t1}
              alt=""
            />
          </li>
          <li className="add-text">{item.t2}</li>
        </p>
      </>
    );
  };
  const FunctionNum = (item) => {
    return (
      <>
        <ul className="text-center text-white  list-unstyled">
          <li className="scam">
            <img
              style={{ width: "30px", height: "30px", padding: "2px" }}
              src={item.t1}
              alt=""
            />{" "}
            <span>{item.t2}</span>
          </li>
        </ul>
      </>
    );
  };
  const MenuFunc = (item) => {
    return (
      <div className="m-auto wdt">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          {" "}
          {item}
        </Link>{" "}
      </div>
    );
  };
  return (
    <>
      <div className="container-fluid colr">
        <div className="row">
          <div className="col-lg-9 py-2 mt-4 mb-3  m-auto mainn">
            {MenuItem.map(MenuFunc)}
          </div>
        </div>

        <div className="row  lead3">
          <div className="col-lg-4 px-0 m-auto">
            <ul className="text-white list-unstyled">
              {/* {Add.map(FunctionAdd)} */}
              <p style={{ display: "flex" }}>
          <li>
            <img
              style={{ width: "40px", height: "40px", padding: "5px" }}
              src="img/loco2.png"
              alt=""
            />
          </li>
          <li className="add-text">
          <pre>LazygoneNetwork private Ltd, <br />Shree Shirdi Sai Complex 2nd<br />Floor Kothiwal Nagar<br />Distt - Moradabad (up) 244001</pre></li>
        </p>
              </ul>
          </div>

          <div className="col-lg-3  text-center m-auto">
            {Num.map(FunctionNum)}
          </div>
          <div className="col-lg-3 text-center m-auto">
            <img className="h-100 w-50" src="img/WHITElogo.png" alt="" />
          </div>
        </div>

        <hr style={{ color: "white" }} />
        <div className="row  text-white sii">
          <center>
            Lazygone. All rights reserved.
            <div className="sticky-foot">
              <span className="p-3 fosi">
                <FaFacebook />
              </span>
              <span className="p-3 fosi">
                <FaTwitter />
              </span>
              <span className="p-3 fosi">
                <SiGmail />
              </span>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
export default MainFooter;
