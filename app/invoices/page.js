"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainInvoice from "../components/invoiceui/MainInvoice";
import ModalUI from "../components/invoiceui/Modal";

const Invoices = () => {
  const [show, setShow] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    (async () => {
      const storedData = localStorage.getItem("data");
      const parsedData = JSON.parse(storedData);

      const res = await fetch("/api/invoices", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      const filteredInvoice = data.data.filter(
        (inv) => inv.businessEmail === parsedData.email
      );

      setInvoices(filteredInvoice);
      setEmail(parsedData.email);
    })();
  }, []);

  return (
    <div className="h-full lg:h-[100svh] flex w-full relative">
      {show && <ModalUI show={show} handleClose={handleClose} />}
      <Sidebar />
      <MainInvoice
        handleShow={handleShow}
        invoices={invoices}
        email={email}
        isInvoice={true}
      />
    </div>
  );
};

export default Invoices;
