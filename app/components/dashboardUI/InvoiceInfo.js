"use client";

// import { Chart } from "react-google-charts";

const InvoiceInfo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      <div className="w-[95%] md:w-[30%] lg:h-[210px] bg-white text-black rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold">Income</h2>
        <p className="text-3xl font-semibold">$900.00</p>
      </div>
      <div className="w-[95%] md:w-[30%] lg:h-[210px] bg-white text-black rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold">Unpaid</h2>
        <p className="text-3xl font-semibold">$0.00</p>
      </div>
      <div className="w-[95%] md:w-[30%] lg:h-[210px] bg-white text-black rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold">Overdue</h2>
        <p className="text-3xl font-semibold">$230.00</p>
      </div>
    </div>
  );
};

export default InvoiceInfo;
