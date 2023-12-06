import React, { useState } from "react";
import styles from "./TodoList.module.css";
import "@fontsource/lobster";
const TodoList = () => {
  let [isChecked,setIsSchecked]=useState(true)
  let [date, setDate] = useState(new Date());
  let currentDate = () => {
    setDate(new Date());
  };
  function handleChange(){
    setIsSchecked(!isChecked)
  }
  setInterval(currentDate, 1000);
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>Daily Routine to Battle</h1>
        <div className={styles.leftContent}>
          <div className={styles.date}>
            Date:
            <span className={styles.dateDisplay} >{date.toDateString()}</span>
          </div>
          <div className={styles.morning}>
            <b><span>Morning Routine</span><button>Add</button></b>
            <div className={styles.morningDetails}>
              <p className={styles.input} >meditation </p><input type="checkbox" onChange={handleChange} checked={isChecked}  />
            {isChecked}
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <p>lorem200</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
