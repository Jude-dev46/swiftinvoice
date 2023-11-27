"use client";

import { useEffect, useState } from "react";
import InvoiceInfo from "./InvoiceInfo";
import MainHeader from "./MainHeader";
import RecentInvoices from "./RecentInvoices";

const Main = ({ invoices }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("data");
      const parsedData = JSON.parse(userData);

      setUsername(parsedData.businessName);
      setEmail(parsedData.email);
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-4 md:px-12 lg:px-24 py-8">
      <MainHeader welcomeText={`Welcome ${username}`} email={email} />
      <InvoiceInfo />
      <RecentInvoices title={"Recent Invoices"} invoices={invoices} />
    </div>
  );
};

export default Main;
