"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const SingleInvoiceInfo = ({ invoice, invoiceId, openModal }) => {
  const router = useRouter();
  const inputRef = useRef();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const parsedData = JSON.parse(storedData);

    setName(parsedData.businessName);
  }, []);

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
    const uri = data.data.url;

    if (data.status) {
      const res = await fetch("/api/invoices/sendMails", {
        method: "POST",
        headers: {
          "Conent-Type": "application/json",
        },
        body: JSON.stringify({
          businessName: name,
          clientEmail: inputRef.current.value,
          product: invoice[0]?.product,
          paymentUrl: uri,
        }),
      });

      const data = await res.json();
      console.log(data);
      setMessage(data.message);
      setShow(false);
    } else {
      setMessage(data.error);
    }
  }

  function handleShow() {
    setShow(true);
  }

  function cancelShow() {
    setShow(false);
  }

  return (
    <div className="w-full text-black flex items-center gap-8 relative">
      <div className="flex flex-col justify-center gap-4 text-xl font-bold">
        <p>ID:</p>
        <p>Product:</p>
        <p>Amount</p>
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
          onClick={handleShow}
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
      {show && (
        <div className="bg-[rgb(0,0,0,0.7)] fixed w-full h-screen top-0 left-0 flex flex-col justify-center items-center gap-4 z-20 overflow-hidden">
          <input
            type="email"
            ref={inputRef}
            placeholder="Enter client email address"
            className="block w-[60%] md:w-[15%] px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none  focus:ring-[#ffe08a]"
          />
          <div className="flex gap-2">
            <button
              className="bg-red-600 px-4 py-2 rounded-lg"
              onClick={cancelShow}
            >
              Cancel
            </button>
            <button
              className="bg-green-600 px-4 py-2 rounded-lg"
              onClick={sendInvoiceHandler}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleInvoiceInfo;
