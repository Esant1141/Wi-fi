import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const serviceImg = [
  {
    img: "img/altbalaji.png",
    title: "ALTbalaji",
  },
  {
    img: "img/epic.png",
    title: "Epic on",
  },
  {
    img: "img/erosenow.png",
    title: "erosenow",
  },
  {
    img: "img/dollywood.webp",
    title: "dollywood",
  },
  {
    img: "img/dr.png",
    title: "DR Happiness",
  },
];
const serviceImgFun = (item) => {
  return (
    <div>
      <img width={"50px"} src={item.img} alt="" />
      <p>{item.title}</p>
    </div>
  );
};
export const mainServiceImgFun = serviceImg.map(serviceImgFun);

const service = ["Unlimited Data", "OTT-5", "Upto 50mbps", "100+ Live Channel"];
const serviceFun = (item) => {
  return <Col sm={3}>{item}</Col>;
};
export const mainServiceFun = service.map(serviceFun);
const service1 = ["Unlimited Data", "OTT-5", "Upto 50mbps", "100+ Live Channel"];
const serviceFun1 = (item) => {
  return <Col sm={3}>{item}</Col>;
};
export const mainServiceFun1 = service1.map(serviceFun1);
const service2 = ["Unlimited Data", "OTT-5", "Upto 50mbps", "100+ Live Channel"];
const serviceFun2 = (item) => {
  return <Col sm={3}>{item}</Col>;
};
export const mainServiceFun2 = service2.map(serviceFun2);
const service3 = ["Unlimited Data", "OTT-5", "Upto 50mbps", "100+ Live Channel"];
const serviceFun3 = (item) => {
  return <Col sm={3}>{item}</Col>;
};
export const mainServiceFun3 = service3.map(serviceFun3);

const modalChange = [
  {
    title: "Entertainment",
    price: "Monthly Rental ₹499",
    btn: "BUY NOW",
    path: "/buy",
  },
  {
    title: "Basic",
    price: "Monthly Rental ₹799",
    btn: "BUY NOW",
    path: "/buy",
  },
  {
    title: "Standard",
    price: "Monthly Rental ₹999",
    btn: "BUY NOW",
    path: "/buy",
  },
  {
    title: "Professional",
    price: "Monthly Rental ₹1399",
    btn: "BUY NOW",
    path: "/buy",
  },
];
const modalChangeFun = (item) => {
  return (
    <>
      <h3>{item.title}</h3>
      <Col sm={6}>
        <p>{item.price}</p>
      </Col>

      <Col sm={6}>
        <Link to={item.path}>
          <Button className="change-plan">{item.btn}</Button>
        </Link>
      </Col>
    </>
  );
};
export const mainModalFUn = modalChange.map(modalChangeFun);

// const modalSlider = [
//   {
//     title: "Entertainment",
//     price: "Monthly Rental ₹499",
//     btn: "BUY NOW",
//     path:"/buy"
//   },
//   {
//     title: "Basic",
//     price: "Monthly Rental ₹799",
//     btn: "BUY NOW",
//     path:"/buy"
//   },
//   {
//     title: "Standard",
//     price: "Monthly Rental ₹999",
//     btn: "BUY NOW",
//     path:"/buy"
//   },
//   {
//     title: "Professional",
//     price: "Monthly Rental ₹1399",
//     btn: "BUY NOW",
//     path:"/buy"
//   },
// ];
// const modalSliderFun = (item) => {
//   return (
//     <>
//       <Col sm={3}>Unlimited Data</Col>
//     </>
//   );
// };
// export const mainModalSlider = modalSlider.map(modalSliderFun);
