import React from "react";
import classes from "./Content.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Content = () => {
  return (
    <div className={`${classes.content}`}>
      <Container className={`${classes.container} py-4`}>
        <Row className={classes.row}>
          <Col lg={3}>
            <div className="ps-3 text-center text-lg-start">
              <p>ip address</p>
              <h3 className="mt-2">192.212.174.101</h3>
            </div>
          </Col>
          <Col lg={3}>
            <div className={`${classes.item} ps-3`}>
              <p>location</p>
              <h3 className="mt-2">brooklun,NY 10001</h3>
            </div>
          </Col>
          <Col lg={3}>
            <div className={`${classes.item} ps-3`}>
              <p>time zone</p>
              <h3 className="mt-2">UTC-05:00</h3>
            </div>
          </Col>
          <Col lg={3}>
            <div className={`${classes.item} ps-3`}>
              <p>isp</p>
              <h3 className="mt-2">SpaceX starlink</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
