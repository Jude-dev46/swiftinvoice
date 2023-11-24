"use client";

import { useRouter } from "next/navigation";

const RecentInvoices = ({ title, isInvoice }) => {
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
      client: "Zack",
      amount: 350,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Paid",
    },
    {
      id: 5,
      client: "Moses",
      amount: 5000,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Pending",
    },
    {
      id: 6,
      client: "Moses",
      amount: 120,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Paid",
    },
    {
      id: 7,
      client: "Moses",
      amount: 800,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Pending",
    },
  ];

  function navigateToInvoicePage() {
    router.push("/invoices");
  }

  return (
    <div className="bg-white w-[96%] lg:h-[400px] shadow-md rounded-md">
      <div className="bg-violet-200 rounded-tl-md rounded-tr-md p-4 flex justify-between">
        <p className="text-black text-xl font-bold">{title}</p>
        {!isInvoice && (
          <button
            className="text-black text-xl font-semibold hover:text-blue-600"
            onClick={navigateToInvoicePage}
          >
            View All
          </button>
        )}
        <div className="flex gap-4">
          {isInvoice && (
            <button className="text-black text-xl font-semibold">filter</button>
          )}
          {isInvoice && (
            <button className="text-black text-xl font-semibold hover:text-blue-600">
              create
            </button>
          )}
        </div>
      </div>
      <div className="overflow-y-scroll max-h-[85%]">
        <div className="w-full flex justify-between text-black font-bold px-8 py-4">
          <p className="w-[20%]">ID</p>
          <p className="w-[20%]">Client</p>
          <p className="w-[20%]">Amount</p>
          <p className="w-[20%]">DueDate</p>
          <p className="w-[20%]">Status</p>
        </div>
        {DUMMY_INVOICES.map((invoice) => (
          <div key={invoice.id}>
            <div className="w-full flex justify-between text-black font-bold px-8 py-4">
              <p className="w-[20%]">{invoice.id}</p>
              <p className="w-[20%]">{invoice.client}</p>
              <p className="w-[20%]">${invoice.amount}</p>
              <p className="w-[20%]">{invoice.dueDate}</p>
              <p
                className={`w-[20%] ${
                  invoice.isPaid === "Unpaid"
                    ? "text-red-500"
                    : "text-green-800"
                }`}
              >
                {invoice.isPaid}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInvoices;
