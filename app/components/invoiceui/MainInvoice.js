"use client";

import { useState } from "react";
import { uiActions } from "../store/uislice";
import { useSelector, useDispatch } from "react-redux";

import MainHeader from "../dashboardUI/MainHeader";
import RecentInvoices from "../dashboardUI/RecentInvoices";

const MainInvoice = ({ handleShow, invoices, email, isInvoice }) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState();
  const isOpen = useSelector((state) => state.ui.isOpen);

  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div
      className={`bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-4 md:px-12 lg:px-24 py-8`}
    >
      <MainHeader welcomeText={"Invoices"} email={email} />
      <select
        className="bg-violet-200 w-fit text-black mb-4 rounded-md"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value={"All"}>All</option>
        <option value={"Paid"}>Paid</option>
        <option value={"Unpaid"}>Unpaid</option>
        <option value={"Overdue"}>Overdue</option>
      </select>
      <div onClick={() => dispatch(uiActions.setIsOpen(false))}>
        <RecentInvoices
          title={"Invoices"}
          isInvoice={isInvoice}
          invoices={invoices}
          handleShow={handleShow}
          selectedValue={selectedValue}
        />
      </div>
    </div>
  );
};

export default MainInvoice;
