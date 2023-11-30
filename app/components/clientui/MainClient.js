"use client";
import MainHeader from "../dashboardUI/MainHeader";
import ClientInvoice from "../invoiceui/ClientInvoice";

const MainClient = ({ handleShow, clients, email }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-8 md:px-12 lg:px-24 py-8">
      <MainHeader welcomeText={"Clients"} email={email} />
      <ClientInvoice
        isClient={true}
        handleShow={handleShow}
        businessEmail={email}
        clients={clients}
      />
    </div>
  );
};

export default MainClient;
