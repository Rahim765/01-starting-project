import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import "./Dropdown.css";
const Dropdown = (props) => {
  const [age, setAge] = useState("");
  function handleChange(e) {
    setAge(e.target.value);
  }
  return (
    <div>
      <FormControl className="drop">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Test1</MenuItem>
          <MenuItem value={20}>Test2</MenuItem>
          <MenuItem value={30}>Test3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
