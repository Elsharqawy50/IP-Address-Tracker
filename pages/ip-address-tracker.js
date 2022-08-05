import React, { Fragment } from "react";
import Head from "next/head";
import IpAddressLookup from "../components/ip-address-page/IpAddressLookup";


const IpAddressTracker = () => {
  return (
    <Fragment>
      <Head>
        <title>IP Address Lookup</title>
      </Head>
      <IpAddressLookup />
    </Fragment>
  );
};

export default IpAddressTracker;
