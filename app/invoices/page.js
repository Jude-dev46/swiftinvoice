"use client";
import { useState } from "react";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainInvoice from "../components/invoiceui/MainInvoice";
import ModalUI from "../components/invoiceui/Modal";

const Invoices = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="h-full flex w-full overflow-scroll">
      {show && <ModalUI show={show} handleClose={handleClose} />}
      <Sidebar />
      <MainInvoice handleShow={handleShow} />
    </div>
  );
};

export default Invoices;
