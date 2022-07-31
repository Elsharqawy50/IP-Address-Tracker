import React, { Fragment } from "react";
import classes from "./IpAddressLookup.module.css";
import Image from "next/image";
import IpFrom from "./IpFrom";
import dynamic from "next/dynamic";
// import Content from "./content";
import Container from "react-bootstrap/Container";

const Map = dynamic(() => import("./Map"), { ssr: false });
const Content = dynamic(() => import("./Content"), { ssr: false });

const IpAddressLookup = () => {
  return (
    <Fragment>
      <section className={classes.address}>
        <div className={classes.wrapper}>
          <Image
            src="/ip-tracker-page/pattern-bg.png"
            alt="background image"
            width={2000}
            height={250}
            layout="fixed"
            objectPosition="center"
          />
        </div>
        <Container>
          <div className={classes.header}>
            <h2>ip address tracker</h2>
          </div>
          <IpFrom />
        </Container>
      </section>
      <Content />
      <Map />
    </Fragment>
  );
};

export default IpAddressLookup;
