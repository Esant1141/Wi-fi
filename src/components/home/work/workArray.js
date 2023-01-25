import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const workMenu = [
  {
    t1: "1",
    t2: "SUBMIT YOUR SERVICE REQUEST",
    t3: "It is very important to us that customers meet the owner, give the history of their Lazygone, so that any kinks can be worked out before we start regular service. Lazygone Service cannot be quoted properly over the phone.",
  },
  {
    t1: "2",
    t2: "WE CONNECT YOU WITH A CERTIFIED SERVICE TECHNICIAN",
    t3: "In some cases the Lazygone will not be ready for weekly Lazygone Service. If this is the case customers will be informed of repairs or if a clean-up is needed before service can begin. Work will only be completed with customer approval.",
  },
  {
    t1: "3",
    t2: "A SERVICE TECHNICIAN WILL REACH OUT TO YOU SHORTLY",
    t3: "Our Service Manager will service the Lazygone for the first two weeks of service. During this time all equipment will be logged and a detailed report will be given to your permanent Lazygone service technician.",
  },
  {
    t1: "4",
    t2: "BACK TO ENJOYING YOUR BACKYARD",
    t3: "Assigned service tech will start regular service.",
  },
];
const workFunction = (item) => {
  return (
    <>
      <Col className="flex">
        <span className="crcl">
          <p className="workCount">{item.t1}</p>
        </span>
        <span>
          <Card.Title className="c2">{item.t2}</Card.Title>
          <Card.Text className="c3">{item.t3}</Card.Text>
        </span>
      </Col>
    </>
  );
};
export const mainWorkFunction = workMenu.map(workFunction);