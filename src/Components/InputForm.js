import { useState } from "react";
import Checkbox from "./Checkbox";
import classes from "./Inputform.module.css";

const InputForm = (props) => {
  const [input, setInput] = useState("");
  const [boolean, setBoolean] = useState("");

  const getBool = (par) => {
    setBoolean(par);
  };

  const getValue = (e) => {
    e.preventDefault();
    const taskObj = {
      task: input,
      id: Math.floor(Math.random() * 50) + 1,
      bool: boolean,
    };
    props.task(taskObj);
    setInput("");
  };
  return (
    <>
      <div className={classes.flex}>
        <form onSubmit={getValue}>
          <input
            className={classes.inp}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>

          <button className={classes.button} type="submit">
            Add Task
          </button>
        </form>
        <Checkbox bool={getBool}></Checkbox>
      </div>
    </>
  );
};

export default InputForm;
