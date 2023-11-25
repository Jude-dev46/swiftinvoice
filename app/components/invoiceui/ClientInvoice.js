"use client";

import { useRouter } from "next/navigation";

const ClientInvoice = ({ isClient }) => {
  const router = useRouter();

  const DUMMY_CLIENTS = [
    
        {
          clientName: "John Doe",
          clientId: 1,
          email: "john.doe@example.com",
          phoneNo: 1234567890,
        },
        {
          clientName: "Jane Doe",
          clientId: 2,
          email: "jane.doe@example.com",
          phoneNo: 9876543210,
        },
        {
          clientName: "Oscar Doe",
          clientId:3,
          email: "oscar.doe@example.com",
          phoneNo: 5555555555,
        },
        {
          clientName: "Zack",
          clientId: 4,
          email: "zack@example.com",
          phoneNo: 1112223333,
        },
        {
          clientName: "Moses",
          clientId: 5,
          email: "moses@example.com",
          phoneNo: 9998887777,
        },
        {
          clientName: "Alice",
          clientId: 6,
          email: "alice@example.com",
          phoneNo: 4443332222,
        },
        {
          clientName: "Bob",
          clientId: 7,
          email: "bob@example.com",
          phoneNo: 7776665555,
        },
     
      
  ];

 
  return (
    <div className="bg-white w-[96%] lg:h-[400px] shadow-md rounded-md">
      <div className="bg-violet-200 rounded-tl-md rounded-tr-md p-4 flex justify-between">
        <p className="text-black text-xl font-bold">Clients</p>
        {!isClient && (
          <button
            className="text-black text-xl font-semibold hover:text-blue-600"
            // onClick={navigateToClientPage}
          >
            View All
          </button>
        )}
        <div className="flex gap-4">
          {isClient && (
            <button className="text-black text-xl font-semibold">filter</button>
          )}
          {isClient && (
            <button className="text-black text-xl font-semibold hover:text-blue-600">
              create
            </button>
          )}
        </div>
      </div>
      <div className="overflow-y-scroll max-h-[85%]">
        <div className="w-full flex justify-between items-center text-black font-bold px-8 py-4">
          <p className="w-[20%]">ClientName</p>
          <p className="w-[20%]">ClientId</p>
          <p className="w-[20%]">Email</p>
          <p className="w-[20%]">PhoneNo</p>
        </div>
        {DUMMY_CLIENTS.map((client) => (
          <div key={client.id}>
            <div className="w-full flex justify-between items-center text-black font-bold px-8 py-4">
              <p className="w-[20%]">{client.clientId}</p>
              <p className="w-[20%]">{client.clientName}</p>
              <p className="w-[20%]">${client.email}</p>
              <p className="w-[20%]">{client.phoneNo}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientInvoice;
