"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/dashboardUI/Sidebar";
import SingleInvoice from "../../components/invoiceui/SingleInvoice";

const InvoicePage = () => {
  const [email, setEmail] = useState("");
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    (async () => {
      const storedData = localStorage.getItem("data");
      const parsedData = JSON.parse(storedData);

      setEmail(parsedData.email);

      const res = await fetch("/api/invoices");
      const data = await res.json();
      console.log(data);

      const singleInvoice = data.data.filter(
        (inv) => inv.businessEmail === parsedData.email
      );

      setInvoice(singleInvoice);
    })();
  }, []);

  return (
    <div className="h-[100svh] lg:h-[100svh] flex w-full relative">
      <Sidebar />
      <SingleInvoice email={email} invoice={invoice} />
    </div>
  );
};

export default InvoicePage;
