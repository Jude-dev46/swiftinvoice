"use client";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainInvoice from "../components/invoiceui/MainInvoice";

const Invoices = () => {
  return (
    <div className="h-[100svh] flex w-full">
      <Sidebar />
      <MainInvoice />
    </div>
  );
};

export default Invoices;
