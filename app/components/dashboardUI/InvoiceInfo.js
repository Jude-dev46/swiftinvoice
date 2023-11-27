"use client";

import { useEffect, useState } from "react";

const InvoiceInfo = () => {
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

  let sum = 0;
  const paidInvoices = invoices.filter((inv) => inv.isPaid);
  const unpaidInvoices = invoices.filter((inv) => !inv.isPaid);
  console.log(unpaidInvoices);

  function calcSum(array) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i].amount;
    }

    if (array.length === 0) {
      return 0;
    } else {
      return sum / 100;
    }
  }
  function findOverdueInvoices() {
    const overdueInvoices = invoices.filter((inv) => inv.overdue);
    return overdueInvoices.length;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div
        className={`bg-[url('/Vector.svg')] bg-cover w-[95%] md:w-[30%] lg:h-[210px] bg-white text-black rounded-xl p-8 shadow-md`}
      >
        <h2 className="text-2xl font-bold">Income</h2>
        <p className="text-3xl font-semibold">${calcSum(paidInvoices)}</p>
      </div>
      <div className="bg-[url('/Vector1.svg')] bg-cover w-[95%] md:w-[30%] lg:h-[210px] bg-white text-black rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-bold">Unpaid</h2>
        <p className="text-3xl font-semibold">${calcSum(unpaidInvoices)}</p>
      </div>
      <div className="bg-[url('/Vector1.svg')] bg-cover w-[95%] md:w-[30%] lg:h-[210px] bg-white text-black rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-bold">Overdue</h2>
        <p className="text-3xl font-semibold">{findOverdueInvoices()}</p>
      </div>
    </div>
  );
};

export default InvoiceInfo;
