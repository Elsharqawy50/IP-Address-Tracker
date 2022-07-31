import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Hero.module.css";
import ArrowRightIcon from "../icons/ArrowRightIcon";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <section className={`d-flex align-items-center ${classes.hero}`}>
      <Container>
        <div className={classes.wrapper}>
          <Image
            src="/home-page/bg-Img.jpg"
            alt="background image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <Row>
          <Col sm={6}>
            <div className={classes.banner}>
              <h1>ip address tracker</h1>
              <p className="mt-3">
                See the IP address assigned to your device or Reveal the
                location of any IP address.
              </p>
            </div>
            <Link href={"/ip-address-tracker"}>
              <Button className="px-3 py-2 mt-3" variant="outline-primary">
                Explore <ArrowRightIcon />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
