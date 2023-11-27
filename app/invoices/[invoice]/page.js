"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/dashboardUI/Sidebar";
import Modal from "../../components/invoiceui/Modal";
import SingleInvoice from "../../components/invoiceui/SingleInvoice";

const InvoicePage = ({ params }) => {
  const { invoiceId } = params;
  const [email, setEmail] = useState("");
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
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
      }
    })();
  }, []);

  async function editHandler() {
    try {
      const res = await fetch("/api/invoices", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ invoiceId: invoiceId }),
      });
    } catch (error) {
      return;
    }
  }

  function deleteHandler() {}

  return (
    <div className="h-[100svh] lg:h-[100svh] flex w-full relative">
      <Sidebar />
      <SingleInvoice email={email} invoice={invoice} />
    </div>
  );
};

export default InvoicePage;
