"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// import Close from "../../../public/close.svg";
import Delete from "../../../public/delete.svg";
import Send from "../../../public/send.svg";
import Update from "../../../public/update.svg";
import Image from "next/image";

const RecentInvoices = ({ title, isInvoice, handleShow }) => {
  const router = useRouter();

  const DUMMY_INVOICES = [
    {
      id: 1,
      client: "Jon Doe",
      amount: 350,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Unpaid",
    },
    {
      id: 2,
      client: "John Doe",
      amount: 200,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Paid",
    },
    {
      id: 3,
      client: "Oscar Doe",
      amount: 4000,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Unpaid",
    },
    {
      id: 4,
      client: "Zack Doe",
      amount: 350,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Paid",
    },
    {
      id: 5,
      client: "Moses Doe",
      amount: 5000,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Pending",
    },
    {
      id: 6,
      client: "Moses Doe",
      amount: 120,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Paid",
    },
    {
      id: 7,
      client: "Moses Doe",
      amount: 800,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Pending",
    },
  ];

  function navigateToInvoicePage() {
    router.push("/invoices");
  }

  return (
    <div className="bg-white w-[98%] md:w-[100%] lg:w-[96%] lg:h-[400px] shadow-md rounded-md relative">
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
      <div className="overflow-y-scroll max-h-[85%]">
        <div className="w-full grid grid-cols-5 justify-between items-center text-black font-bold px-2 md:px-8 py-4">
          <p className="text-left">ID</p>
          <p className="text-left">Client</p>
          <p className="text-left">Amount</p>
          <p className="text-left">DueDate</p>
          <p className="text-left">Status</p>
        </div>
        {DUMMY_INVOICES.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between">
            <div className="w-full grid grid-cols-5 justify-between items-center text-black font-bold px-2 md:px-8 py-4 border-b-2 border-neutral-200">
              <p className="w-fit text-left">{invoice.id}</p>
              <p className="w-fit text-left">{invoice.client}</p>
              <p className="w-fit text-left">${invoice.amount}</p>
              <p className="w-fit text-left">{invoice.dueDate}</p>
              <p
                className={`w-fit md:w-[20%] text-left ${
                  invoice.isPaid === "Unpaid"
                    ? "text-red-500"
                    : "text-green-800"
                }`}
              >
                {invoice.isPaid}
              </p>
            </div>
            {isInvoice && (
              <div className="flex items-center gap-2">
                <button>
                  <Image src={Update} width={24} alt="" />
                </button>
                <button>
                  <Image src={Send} width={24} alt="" />
                </button>
                <button>
                  <Image src={Delete} width={24} alt="" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInvoices;
