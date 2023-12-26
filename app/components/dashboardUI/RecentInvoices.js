"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { format, isToday, isYesterday, parseISO } from "date-fns";

const RecentInvoices = ({
  title,
  isInvoice,
  handleShow,
  selectedValue,
  invoices,
}) => {
  const router = useRouter();
  const [inv, setInv] = useState([]);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInfo(false);

      if (!selectedValue) {
        setInv(invoices);
      } else if (selectedValue === "Unpaid") {
        const unpaidInvoice = invoices.filter((inv) => !inv.isPaid);

        if (unpaidInvoice) {
          setInv(unpaidInvoice);
        }
      } else if (selectedValue === "Paid") {
        const paidInvoice = invoices.filter((inv) => inv.isPaid);
        setInv(paidInvoice);

        if (invoices.length === 0) {
          setInfo(true);
        }
      }
    }
  }, [selectedValue, invoices]);

  function formatThreadDate(dateArg) {
    if (dateArg) {
      if (isToday(parseISO(dateArg))) {
        return "Today";
      } else if (isYesterday(parseISO(dateArg))) {
        return "Yesterday";
      } else {
        return format(parseISO(dateArg), "dd-mm-yy");
      }
    }
  }

  function navigateToInvoicePage() {
    router.push("/invoices");
  }

  return (
    <div className="bg-white w-[100%] md:w-[100%] lg:w-[96%] h-[80vh] lg:h-[400px] shadow-md rounded-md relative">
      <div className="bg-violet-200 rounded-tl-md rounded-tr-md p-4 flex justify-between">
        <p className="text-black text-xl font-bold lg:ml-[12px]">{title}</p>
        {!isInvoice && (
          <button
            className="text-black text-xl font-semibold hover:text-blue-600"
            onClick={navigateToInvoicePage}
          >
            View All
          </button>
        )}
        {isInvoice && (
          <div className="flex gap-4">
            <div>
              <button
                onClick={handleShow}
                className="text-black text-xl font-semibold lg:mr-[12px] hover:text-blue-600"
              >
                Create
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="overflow-y-scroll max-h-[85%]" key={Math.random(2) * 2}>
        <div className="w-full flex justify-between items-center text-black font-bold px-2 md:px-8 py-4">
          <p className="w-fit md:w-fit text-right">ID</p>
          <p className="w-fit md:w-fit text-right">Amount</p>
          <p className="w-fit md:w-fit text-right">DueDate</p>
          <p className="w-fit md:w-[20%] text-right">Status</p>
        </div>
        {inv.length === 0 && (
          <p className="flex justify-center text-center text-black font-bold">
            No invoice available
          </p>
        )}
        {inv.map((invoice) => (
          <>
            <Link
              href={`/invoices/${invoice.invoiceId}`}
              key={invoice.invoiceId}
            >
              <div className="w-full flex justify-between items-center text-black font-bold px-2 md:px-8 py-4 hover:bg-neutral-200">
                <p className="w-fit md:w-fit text-right">
                  {invoice.invoiceId.slice(0, 5)}
                </p>
                <p className="w-fit md:w-fit text-right">
                  ${invoice.amount / 100}
                </p>
                <p className="w-fit md:w-fit text-right">
                  {formatThreadDate(invoice.dueDate)}
                </p>
                <p
                  className={`w-fit md:w-[20%] text-right ${
                    invoice.isPaid ? "text-green-500" : "text-red-600"
                  }`}
                >
                  {invoice.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default RecentInvoices;
