import React from "react";
import classes from "./Content.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Content = (props) => {
  // destructuring data of location from ipAddressLookup to show on content section
  const { ip, isp, timezone, region } = props.location;

  return (
    <div className={`${classes.content}`}>
      <Container className={`${classes.container} py-4`}>
        <Row className={classes.row}>
          <Col lg={3}>
            <div className="ps-lg-3 text-center text-lg-start">
              <p>ip address</p>
              <h3 className="mt-2">{ip}</h3>
            </div>
          </Col>
          <Col lg={3}>
            <div className={`${classes.item} ps-lg-3`}>
              <p>location</p>
              <h3 className="mt-2">{region}</h3>
            </div>
          </Col>
          <Col lg={3}>
            <div className={`${classes.item} ps-lg-3`}>
              <p>time zone</p>
              <h3 className="mt-2">UTC{timezone}</h3>
            </div>
          </Col>
          <Col lg={3}>
            <div className={`${classes.item} ps-lg-3`}>
              <p>isp</p>
              <h3 className="mt-2">{isp}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
