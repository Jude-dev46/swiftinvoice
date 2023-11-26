"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const RecentInvoices = ({ title, isInvoice }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      client: "Zack Doe",
      amount: 350,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Paid",
    },
    {
      id: 5,
      client: "Moses Doe",
      amount: 5000,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Pending",
    },
    {
      id: 6,
      client: "Moses Doe",
      amount: 120,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Paid",
    },
    {
      id: 7,
      client: "Moses Doe",
      amount: 800,
      dueDate: new Date().toLocaleDateString(),
      isPaid: "Pending",
    },
  ];

  function navigateToInvoicePage() {
    router.push("/invoices");
  }

  return (
    <div className="bg-white w-[98%] md:w-[100%] lg:w-[96%] lg:h-[400px] shadow-md rounded-md relative">
      <div className="bg-violet-200 rounded-tl-md rounded-tr-md p-4 flex justify-between">
        <p className="text-black text-xl font-bold lg:ml-[12px]">{title}</p>
        {!isInvoice && (
          <button
            className="text-black text-xl font-semibold hover:text-blue-600"
            onClick={navigateToInvoicePage}
          >
            View All
          </button>
        )}
        {isInvoice && (
          <div className="flex gap-4">
            <button className="text-black text-xl font-semibold">Filter</button>
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
                                <Form.Label className='text-black font-semibold'>Amount</Form.Label>
                                <Form.Control type="text" className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"/>
                              </Form.Group>
                              <Form.Group
                                className="mb-3 flex flex-col"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label className='text-black font-semibold'>Due Date</Form.Label>
                                <Form.Control type="text" className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"/>
                              </Form.Group>
                              <Form.Group
                                className="mb-3 flex flex-col "
                              >
                              
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
          </div>
        )}
      </div>
      <div className="overflow-y-scroll max-h-[85%] lg:text-lg">
        <div className="w-full grid grid-cols-6 justify-between items-center text-black font-bold px-2 md:px-8 py-4">
          <p className="text-left">ID</p>
          <p className="text-left">Client</p>
          <p className="text-left">Amount</p>
          <p className="text-left">DueDate</p>
          <p className="text-left">Status</p>
        </div>
        {DUMMY_INVOICES.map((invoice) => (
          <div key={invoice.id}>
            <div className="w-full grid grid-cols-6 justify-between items-center text-black font-bold px-2 md:px-8 py-4 border-b-2 border-neutral-200">
              <p className="w-fit text-left">{invoice.id}</p>
              <p className="w-fit text-left">{invoice.client}</p>
              <p className="w-fit text-left">${invoice.amount}</p>
              <p className="w-fit text-left">{invoice.dueDate}</p>
              <p
                className={`w-fit md:w-[20%] text-left ${
                  invoice.isPaid === "Unpaid"
                    ? "text-red-500"
                    : "text-green-800"
                }`}
              >
                {invoice.isPaid}
              </p>
              <button className='bg-red-500 w-28 text-white rounded-md lg:text-lg p-2'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInvoices;
