import { useState } from "react";
import classes from "./checkbox.module.css";

const Checbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);

    props.bool(!isChecked);
  };
  return (
    <>
      <label className={classes.container}>
        <input
          className={classes.input}
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <span class={classes.checkmark}></span>
        Mark As Important!
      </label>
    </>
  );
};
export default Checbox;
