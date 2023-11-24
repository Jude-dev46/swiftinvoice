import React from "react";

const InvoiceInfo = () => {
  return (
    <div className="flex gap-8 mb-8">
      <div className="w-[30%] lg:h-[210px] bg-white text-black rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold">Income</h2>
        <p className="text-4xl font-bold">$900.00</p>
      </div>
      <div className="w-[30%] lg:h-[210px] bg-white text-black rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold">Unpaid</h2>
        <p className="text-4xl font-bold">$0.00</p>
      </div>
      <div className="w-[30%] lg:h-[210px] bg-white text-black rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold">Overdue</h2>
        <p className="text-4xl font-bold">$230.00</p>
      </div>
    </div>
  );
};

export default InvoiceInfo;
