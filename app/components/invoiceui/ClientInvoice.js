"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const ClientInvoice = ({ isClient }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      clientId: 3,
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
    <div className="bg-white w-[98%] md:w-[100%] lg:w-[96%] lg:h-[400px] shadow-md rounded-md">
      <div className="bg-violet-200 rounded-tl-md rounded-tr-md p-4 flex justify-between">
        <p className="text-black text-xl font-bold lg:ml-[12px]">Clients</p>
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
            <button className="text-black text-xl font-semibold">Filter</button>
          )}
          {isClient && (
            <div>
            <button onClick={handleShow} className="text-black text-xl font-semibold lg:mr-[12px] hover:text-blue-600">
                  Create
            </button>
            <Modal show={show} onHide={handleClose} className='bg-neutral-100 rounded-lg text-lg px-8 absolute top-40 w-[450px]  left-1/2 z-10 shadow-2xl shadow-slate-500'>
                          <Modal.Header closeButton>
                            <Modal.Title className='text-center text-2xl text-black mt-5 font-semibold'>Invoice</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form className='text-black -mt-4'>
                              <Form.Group className="mb-3 flex flex-col" controlId="exampleForm.ControlInput1">
                                <Form.Label className='text-black font-semibold'>ID</Form.Label>
                                <Form.Control
                                  type="text"
                                  className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3 flex flex-col"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label className='text-black font-semibold'>Name</Form.Label>
                                <Form.Control type="text" className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"/>
                              </Form.Group>
                              <Form.Group
                                className="mb-3 flex flex-col"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label className='text-black font-semibold'>Email</Form.Label>
                                <Form.Control type="email" className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"/>
                              </Form.Group>
                              <Form.Group
                                className="mb-3 flex flex-col "
                                controlId="exampleForm.ControlTextarea1"
                              >
                              <Form.Label className='text-black font-semibold'>Phone number</Form.Label>
                                <Form.Control type="number" className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"/>
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <button onClick={handleClose} className='bg-yellow-500 mb-5 text-black px-3 py-2 rounded-md'>
                              Create Invoice
                            </button>
                          </Modal.Footer>
                  </Modal>
            </div>
            
          )}
        </div>
      </div>
      <div className="overflow-y-scroll max-h-[85%]">
        <div className="w-full grid grid-cols-6 justify-between items-center text-black lg:text-lg font-bold px-8 py-4">
          <p className="w-fit md:w-[20%] text-left">ClientId</p>
          <p className="w-fit md:w-[20%] text-left">ClientName</p>
          <p className="col-span-2 w-fit md:w-[20%] text-left">Email</p>
          <p className="w-fit md:w-[20%] text-left">PhoneNo</p>
        </div>
        {DUMMY_CLIENTS.map((client) => (
          <div key={client.clientId}>
            <div className="w-full grid grid-cols-6 justify-between items-center text-black lg:text-lg font-bold px-8 py-4 ">
              <p className="col-span-1 text-left">{client.clientId}</p>
              <p className="text-left">{client.clientName}</p>
              <p className="col-span-2 text-left">{client.email}</p>
              <p className="text-left">{client.phoneNo}</p>
              <button className='bg-red-500 w-28 text-white rounded-md lg:text-lg p-2'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientInvoice;
