import { useEffect, useState } from "react";
import InputForm from "./InputForm.js";
import classes from "./addTask.module.css";

const AddTask = () => {
  const [addTask, setAddTask] = useState(
    JSON.parse(localStorage.getItem("2")) || [{}]
  );
  useEffect(() => {
    localStorage.setItem("2", JSON.stringify(addTask));
  }, [addTask]);

  const tasker = (par) => {
    setAddTask((prevtask) => {
      return [par, ...prevtask];
    });
  };
  const removeHendeler = (id) => {
    const newList = addTask.filter((item) => item.id !== id);

    setAddTask(newList);
  };

  return (
    <>
      <InputForm task={tasker}></InputForm>

      <div>
        {addTask.map((item, index) => {
          return (
            <div className={classes.flex} key={index}>
              <h1 style={{ color: item.bool ? "red" : "black" }}>
                {item.task}
              </h1>
              <button
                className={classes.btn}
                onClick={() => removeHendeler(item.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddTask;
