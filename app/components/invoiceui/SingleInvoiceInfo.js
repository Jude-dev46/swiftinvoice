"use client";

const SingleInvoiceInfo = ({ invoice }) => {
  console.log(invoice);

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
        <button className="bg-green-600 px-4 py-2 rounded-lg">Edit</button>
        <button className="bg-red-600 px-4 py-2 rounded-lg">Delete</button>
      </div>
    </div>
  );
};

export default SingleInvoiceInfo;
