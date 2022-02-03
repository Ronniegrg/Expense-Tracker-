import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  function handleChange(event) {
    const selectedValue = event.target.value;
    props.onChangeFilter(selectedValue);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <label htmlFor="">Filter by year</label>
        <select value={props.year} onChange={handleChange} name="" id="">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
