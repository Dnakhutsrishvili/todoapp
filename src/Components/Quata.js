import { useState, useEffect } from "react";
import classes from "./Quata.module.css";

const Quata = () => {
  const [quates, setquates] = useState("");

  const fetchData = () => {
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setquates(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={classes.flex}>
        <p className={classes.title}>Quote:</p>
        <p className={classes.quate}>{quates.quote}</p>
      </div>
    </>
  );
};
export default Quata;
