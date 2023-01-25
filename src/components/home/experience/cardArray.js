import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ZoomData = [
  {
    icon: "img/s2.png",
    title: "High Speed Fiber Internet",
    para: "Lighting High Speed Internet is being experienced by the users, Tripleplay provides upto100 Mbps speed in a very low price",
    know:"KNOW MORE"
  },  
  {
    icon: "img/s3.png",
    title: "High Speed Fiber Internet",
    para: "Lighting High Speed Internet is being experienced by the users, Tripleplay provides upto100 Mbps speed in a very low price",
    know:"KNOW MORE"
  },
  {
    icon: "img/s4.png",
    title: "High Speed Fiber Internet",
    para: "Lighting High Speed Internet is being experienced by the users, Tripleplay provides upto100 Mbps speed in a very low price",
    know:"KNOW MORE"
  },
  {
    icon: "img/s6.png",
    title: "High Speed Fiber Internet",
    para: "Lighting High Speed Internet is being experienced by the users, Tripleplay provides upto100 Mbps speed in a very low price",
    know:"KNOW MORE"
  },
];
const ZoomFunc = (item) => {
  return (
    <>
      <Col className="col-service" sm={3}>
        <div>
          <img className="img-service" src={item.icon} alt="" />
        {/* <i class="material-icons">&#xe328;</i> */}
        <h5>{item.title}</h5>
        <p>{item.para}</p>
        <Link className="know-btn" to="/">{item.know}</Link>
        </div>
      </Col>
    </>
  );
};
export const mainCardFun = ZoomData.map(ZoomFunc);
