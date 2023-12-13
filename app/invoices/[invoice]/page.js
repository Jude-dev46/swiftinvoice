"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/dashboardUI/Sidebar";
import EditModal from "../../components/invoiceui/EditModal";
import SingleInvoice from "../../components/invoiceui/SingleInvoice";

const InvoicePage = ({ params }) => {
  const { invoice } = params;

  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem("data");
        const parsedData = JSON.parse(storedData);

        setEmail(parsedData.email);

        const res = await fetch("/api/invoices");
        const data = await res.json();

        const singleInvoices = data.data.filter(
          (inv) => inv.businessEmail === parsedData.email
        );

        setInvoices(singleInvoices);
      }
    })();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="h-[100svh] lg:h-[100svh] flex w-full relative overflow-x-hidden">
      {show && (
        <EditModal show={show} handleClose={handleClose} invoiceId={invoice} />
      )}
      <Sidebar />
      <SingleInvoice
        email={email}
        invoice={invoices}
        invoiceId={invoice}
        openModal={handleShow}
        closeModal={handleClose}
      />
    </div>
  );
};

export default InvoicePage;
