import React from 'react'
// import { FaHandsHelping } from "react-icons/fa";
// import { GoClock } from "react-icons/go";
// import { GoLocation } from "react-icons/go";
// import { GoOrganization } from "react-icons/go";
import './exp.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container} from "react-bootstrap";

const Experience = () => {
    const ExpData = [
        {
          e1: "img/e1.png",
          e2: " 1000+",
          e3: "BEST SERVICED",
        },
        {
          e1: "img/e2.png",
          e2: " 500+",
          e3: "TECHNICAL SUPPORT",
        },
        {
          e1: "img/e3.png",
          e2: " 100+",
          e3: "TOWER BUILT",
        },
        {
          e1: "img/e4.png",
          e2: " 2500+",
          e3: "HAPPY CLIENTS",
        }
      ];
      const ExpFunc = (item) => {
        return(
          <>
            <Col>
        
                <p style={{textAlign:"center"}}><img className='e1' src={item.e1} alt=""/></p>
             
            
                <p className="e2">{item.e2}</p>
                <p className="e3">{item.e3}</p>
             
            </Col>
             
          </>
        )
      }
      return (
        
        <Container fluid style={{ background: `linear-gradient(45deg, rgb(84, 222, 230) , rgb(18, 107, 161))`}}>
            <Container>
            <p className="e4">More than 13 years of experience</p>
        <Row xs={1} md={4} style={{paddingBottom:"50px"}} className="g-4">
          {ExpData.map(ExpFunc)}
        </Row>
        </Container>
      </Container>
        
    
      );
    }
    
    export default Experience;