import React, { Fragment, useEffect, useState } from "react";
import classes from "./IpAddressLookup.module.css";
import Image from "next/image";
import IpForm from "./IpForm";
import dynamic from "next/dynamic";
import Content from "./content";
import Container from "react-bootstrap/Container";
import PopoverBottom from "../layout/PopoverBottom";

// import Map component dynamically to load a component on the client side
const Map = dynamic(() => import("./Map"), { ssr: false });

const IpAddressLookup = () => {
  const [searchInput, setSearchInput] = useState("");
  const [location, setlocation] = useState("");
  const [isError, setIsError] = useState(false);

  // take the value of search input
  const searchInputHandler = (searchValue) => {
    setSearchInput(searchValue);
  };

  useEffect(() => {
    // make http requst to IPify to fetch data of user ip address or entered ip address
    const ipAddress = async () => {
      try {
        const respond = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_IcEUxF3twBeWa5LzH3hdGxxm3Z6xF&ipAddress=${searchInput}`
        );
        if (!respond.ok) {
          throw new Error("Please enter a valid IP address.");
        }
        const data = await respond.json();
        // manage data that fetched from http requst
        const transform = {
          ip: data.ip,
          isp: data.isp,
          region: data.location.region,
          timezone: data.location.timezone,
          lat: data.location.lat,
          lng: data.location.lng,
        };
        // set Error to false to hide popover
        setIsError(false);
        setlocation(transform);
      } catch (error) {
        // set Error to true to show popover
        setIsError(true);
      }
    };
    ipAddress();
  }, [searchInput]);

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
          <IpForm onSearch={searchInputHandler} />
        </Container>
      </section>
      <PopoverBottom isError={isError} />
      <Content location={location} />
      {location && <Map location={location} />}
    </Fragment>
  );
};

export default IpAddressLookup;
