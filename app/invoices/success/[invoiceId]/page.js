"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const SuccessPage = ({ params }) => {
  const { invoiceId } = params;

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/invoices", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          invoiceId: invoiceId,
          isPaid: true,
        }),
      });
      await res.json();
    })();
  }, [invoiceId]);

  return (
    <div>
      <p>Payment Successful!</p>
      <Link href={"/dashboard"}>Go to home</Link>
    </div>
  );
};

export default SuccessPage;
