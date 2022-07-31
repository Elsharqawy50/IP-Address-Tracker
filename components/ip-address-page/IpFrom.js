import React from "react";
import Image from "next/image";
import classes from "./IpForm.module.css";
import Container from "react-bootstrap/Container";

const IpFrom = () => {
  return (
    <form className={classes.form}>
      <Container>
        <input
          className="p-3"
          type="text"
          placeholder="enter ip address..."
          required
        />
        <button type="submit">
          <Image
            src="/ip-tracker-page/icon-arrow.svg"
            alt="button"
            width={10}
            height={10}
          />
        </button>
      </Container>
    </form>
  );
};

export default IpFrom;
