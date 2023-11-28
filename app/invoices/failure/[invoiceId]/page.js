"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const FailurePage = ({ params }) => {
  const { invoiceId } = params;

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const res = await fetch("/api/invoices", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            invoiceId: invoiceId,
            isPaid: false,
          }),
        });
        await res.json();
      }
    })();
  }, [invoiceId]);

  return (
    <div>
      <p>Payment Failure!</p>
      <Link href={"/dashboard"}>Go to home</Link>
    </div>
  );
};

export default FailurePage;
