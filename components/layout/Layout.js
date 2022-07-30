import React, { Fragment } from "react";
import MainNavbar from "./MainNavbar";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
