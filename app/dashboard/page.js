"use client";

import { useEffect, useState } from "react";
import isAuth from "../components/utils/isAuth";

import Sidebar from "../components/dashboardUI/Sidebar";
import Main from "../components/dashboardUI/Main";

const Dashboard = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
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
      }
    })();
  }, []);

  return (
    <div className="h-full lg:h-[100svh] flex w-full relative">
      <Sidebar />
      <Main invoices={invoices} />
    </div>
  );
};

export default isAuth(Dashboard);
