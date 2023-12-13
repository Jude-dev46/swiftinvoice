"use client";

import Link from "next/link";

const ClientInvoice = ({ businessEmail, isClient, handleShow, clients }) => {
  const filteredClients = clients.filter(
    (cli) => cli.createdBy.bussinessEmail === businessEmail
  );

  return (
    <div className="bg-white w-[100%] md:w-[100%] lg:w-[96%] h-[80vh] lg:h-[400px] shadow-md rounded-md relative">
      <div className="bg-violet-200 rounded-tl-md rounded-tr-md p-4 flex justify-between">
        <p className="text-black text-xl font-bold lg:ml-[12px]">Clients</p>
        {!isClient && (
          <button className="text-black text-xl font-semibold hover:text-blue-600">
            View All
          </button>
        )}
        <div className="flex gap-4">
          {isClient && (
            <div>
              <button
                onClick={handleShow}
                className="text-black text-xl font-semibold lg:mr-[12px] hover:text-blue-600"
              >
                Create
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="overflow-y-scroll max-h-[85%]">
        <div className="w-full flex gap-16 md:-gap-16 justify-between items-center text-black font-bold px-2 md:px-8 py-4">
          <p className="w-fit md:w-[20%] text-left">ClientId</p>
          <p className="w-fit md:w-[20%] text-left">ClientName</p>
          <p className="col-span-2 w-fit md:w-[20%] text-left">Email</p>
          <p className="w-fit md:w-[20%] text-left">PhoneNo</p>
        </div>
        {filteredClients.length === 0 && (
          <p className="flex justify-center text-center text-black font-bold">
            No client created
          </p>
        )}
        {filteredClients.map((client) => (
          <div key={client.clientId}>
            <Link href={`/clients/${client.clientId}`}>
              <div className="w-full flex gap-16 md:-gap-16 justify-between items-center text-black font-bold px-2 md:px-8 py-4">
                <p className="col-span-1 w-fit text-left">
                  {client.clientId.slice(0, 10)}
                </p>
                <p className="text-left w-fit">{client.clientName}</p>
                <p className="col-span-2 w-fit text-left">{client.email}</p>
                <p className="text-left w-fit lg:mr-24">{client.phoneNo}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientInvoice;
