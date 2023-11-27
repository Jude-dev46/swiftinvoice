"use client";

import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { uiActions } from "../store/uislice";
import { AiOutlineLoading } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const ClientModal = ({ show, handleClose }) => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNoInputRef = useRef();

  const isError = useSelector((state) => state.ui.isError);
  const isLoading = useSelector((state) => state.ui.isLoading);

  if (show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  async function submitHandler(e) {
    e.preventDefault();
    dispatch(uiActions.setIsError(false));
    dispatch(uiActions.setIsLoading(true));

    const storedData = localStorage.getItem("data");
    const parsedData = JSON.parse(storedData);

    const enteredData = {
      businessEmail: parsedData.email,
      clientName: nameInputRef.current.value,
      email: emailInputRef.current.value,
      phoneNo: +phoneNoInputRef.current.value,
    };

    const businessEmailIsValid = enteredData.businessEmail.trim().length > 0;
    const clientNameIsValid = enteredData.clientName.trim().length > 0;
    const emailIsValid = enteredData.email.includes("@");
    const phoneNoIsValid = enteredData.phoneNo > 0;

    if (
      !businessEmailIsValid ||
      !clientNameIsValid ||
      !emailIsValid ||
      !phoneNoIsValid
    ) {
      alert("Invalid inputs");
    }

    try {
      const params = { ...enteredData };
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      const data = await res.json();
      console.log(data);
      if (!data.status) {
        setContent(data.message);
        dispatch(uiActions.setIsError(true));
        dispatch(uiActions.setIsLoading(false));
        return;
      }
      setContent(data.message);
      handleClose();
    } catch (error) {
      dispatch(uiActions.setIsError(true));
    }
  }

  return (
    <div className="bg-[rgb(0,0,0,0.7)] fixed w-full h-screen top-0 left-0 flex flex-col justify-center items-center z-20 overflow-hidden">
      <div className="bg-white relative flex flex-col border rounded-lg p-6 z-10">
        <div
          onClick={handleClose}
          className="w-12 mb-4 text-center text-blue-900 cursor-pointer hover:text-blue-950 hover:font-bold"
        >
          close
        </div>

        <Form className="text-black -mt-4">
          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="text-black font-semibold">
              Client Name
            </Form.Label>
            <Form.Control
              type="text"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
              ref={nameInputRef}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="text-black font-semibold">
              Client Email
            </Form.Label>
            <Form.Control
              type="email"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
              ref={emailInputRef}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="text-black font-semibold">
              Client contact no.
            </Form.Label>
            <Form.Control
              type="number"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
              ref={phoneNoInputRef}
            />
          </Form.Group>
          <Form.Group className="mb-3 flex flex-col "></Form.Group>
        </Form>
        <button
          className="bg-slate-950 p-4 mt-2 text-white rounded-md hover:bg-blue-950"
          onClick={submitHandler}
        >
          {isLoading ? (
            <AiOutlineLoading
              size={32}
              color="#fff"
              className="text-center animate-spin"
            />
          ) : (
            "Create"
          )}
        </button>
        {isError && <p className="text-red-600 text-md">{content}</p>}
      </div>
    </div>
  );
};

export default ClientModal;
