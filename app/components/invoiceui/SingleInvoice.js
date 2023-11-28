import React from "react";
import MainHeader from "../dashboardUI/MainHeader";
import SingleInvoiceInfo from "./SingleInvoiceInfo";

const SingleInvoice = ({
  email,
  invoice,
  invoiceId,
  openModal,
  closeModal,
}) => {
  return (
    <>
      <div
        className={`bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-4 md:px-12 lg:px-24 py-8`}
      >
        <MainHeader welcomeText={"Invoices"} email={email} />
        <SingleInvoiceInfo
          invoice={invoice}
          invoiceId={invoiceId}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
    </>
  );
};

export default SingleInvoice;
