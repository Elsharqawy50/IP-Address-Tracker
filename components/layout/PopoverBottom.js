import classes from "./PopoverBottom.module.css";

function PopoverBottom(props) {
  //destructuring isError from ipAddressLookup to toggle hide or show popover
  const { isError } = props;

  return (
    <div className={`${classes.popuptext} ${isError ? classes.show : ""}`}>
      Please enter a valid IP address.
    </div>
  );
}

export default PopoverBottom;
