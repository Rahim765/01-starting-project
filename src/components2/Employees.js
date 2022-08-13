import React, { useState } from "react";
import Employee from "./Employee";
import NewEmployee from "./NewEmployee";
import "./Employees.css";
import PagesBar from "./PagesBar";

const DUMMT_DATA = [
  {
    name: "علی",
    lastname: "علی آبادی",
    phoneNumber: "09123456789",
    pageNumber: 1,
  },
  {
    name: "علی",
    lastname: "علی آبادی",
    phoneNumber: "09123456789",
    pageNumber: 1,
  },
  {
    name: "علی",
    lastname: "علی آبادی",
    phoneNumber: "09123456789",
    pageNumber: 1,
  },
  {
    name: "علی",
    lastname: "علی آبادی",
    phoneNumber: "09123456789",
    pageNumber: 1,
  },
  {
    name: "2علی",
    lastname: "علی آبادی",
    phoneNumber: "09123456789",
    pageNumber: 2,
  },
  {
    name: "2علی",
    lastname: "علی آبادی",
    phoneNumber: "09123456789",
    pageNumber: 2,
  },
  {
    name: "2علی",
    lastname: "علی آبادی",
    phoneNumber: "09123456789",
    pageNumber: 2,
  },
  {
    name: "2علی",
    lastname: "علی آبادی",
    phoneNumber: "09123456789",
    pageNumber: 2,
  },
];

const Employees = (props) => {
  const [pageNumber, setpageNumber] = useState(1);
  function setPage(page) {
    setpageNumber(page);
  }
  return (
    <div>
      <NewEmployee></NewEmployee>
      <br></br>
      <div className="allemp">
        {DUMMT_DATA.map(
          (dum) =>
            dum.pageNumber === pageNumber && (
              <Employee
                name={dum.name}
                lastname={dum.lastname}
                phoneNumber={dum.phoneNumber}
              ></Employee>
            )
        )}
      </div>
      <div className="pagesbar">
        <PagesBar onpage={setPage}></PagesBar>
      </div>
    </div>
  );
};

export default Employees;
