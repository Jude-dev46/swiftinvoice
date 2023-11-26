import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const ModalUI = ({ show, handleClose }) => {
  if (show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className="bg-[rgb(0,0,0,0.7)] fixed w-full h-screen top-0 left-0 flex flex-col justify-center items-center z-20 overflow-hidden">
      <div className="bg-white relative flex flex-col border rounded-lg p-3 z-10">
        <div
          onClick={handleClose}
          className="w-12 mb-4 text-center text-blue-900 cursor-pointer hover:text-blue-950 hover:font-bold"
        >
          close
        </div>

        <Form className="text-black -mt-4">
          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="text-black font-semibold">
              Invoice title
            </Form.Label>
            <Form.Control
              type="text"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="text-black font-semibold">Amount</Form.Label>
            <Form.Control
              type="text"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="text-black font-semibold">
              Due Date
            </Form.Label>
            <Form.Control
              type="Date"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
            />
          </Form.Group>
          <Form.Group className="mb-3 flex flex-col "></Form.Group>
        </Form>
        <button
          className="bg-slate-950 p-4 mt-2 text-white rounded-md hover:bg-blue-950"
          // onClick={goToLoginScreen}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default ModalUI;
