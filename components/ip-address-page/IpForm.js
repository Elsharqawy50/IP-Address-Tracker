import React, { useState } from "react";
import Image from "next/image";
import classes from "./IpForm.module.css";
import Container from "react-bootstrap/Container";

const IpForm = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    // check if no input it will not submit
    if (searchInput.trim().length === 0) {
      return;
    }
    // pass the input value to ipAddressLookup
    props.onSearch(searchInput);
  };

  return (
    <form className={classes.form} onSubmit={searchSubmitHandler}>
      <Container>
        <input
          className="p-3"
          type="text"
          placeholder="enter ip address..."
          required
          value={searchInput}
          onChange={searchInputHandler}
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

export default IpForm;
