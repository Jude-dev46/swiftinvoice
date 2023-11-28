"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SingleInvoiceInfo = ({ invoice, invoiceId, openModal }) => {
  console.log(invoiceId);
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function deleteHandler() {
    const res = await fetch("/api/invoices", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ invoiceId: invoiceId }),
    });
    const data = await res.json();
    setMessage(data.message);
    router.push("/invoices");
  }

  async function sendInvoiceHandler() {
    const res = await fetch("/api/invoices/sendInvoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ invoiceId: invoiceId }),
    });

    const data = await res.json();
    if (data.data.status) {
      console.log(data);
      window.location = data.data.url;
    } else {
      setMessage(data.error);
    }
  }

  return (
    <div className="w-full text-black flex items-center gap-8 relative">
      <div className="flex flex-col justify-center gap-4 text-xl font-bold">
        <p>ID:</p>
        <p>Client:</p>
        <p>Date</p>
        <p>DueDate:</p>
        <p>Status:</p>
      </div>
      <div className="flex flex-col justify-center gap-4 text-xl font-md">
        <p>{invoice[0]?.invoiceId}</p>
        <p>{invoice[0]?.product}</p>
        <p>{invoice[0]?.amount}</p>
        <p>{invoice[0]?.dueDate}</p>
        <p>{invoice[0]?.isPaid ? "Paid" : "Unpaid"}</p>
      </div>
      <div className="flex items-center gap-2 absolute -bottom-12 right-2 md:bottom-2 md:right-2">
        <button
          className="bg-green-600 px-4 py-2 rounded-lg"
          onClick={sendInvoiceHandler}
        >
          Send
        </button>
        <button
          className="bg-green-600 px-4 py-2 rounded-lg"
          onClick={openModal}
        >
          Edit
        </button>
        <button
          className="bg-red-600 px-4 py-2 rounded-lg"
          onClick={deleteHandler}
        >
          Delete
        </button>
        <p className="text-green-600 text-center">{message}</p>
      </div>
    </div>
  );
};

export default SingleInvoiceInfo;
