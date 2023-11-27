import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import { uiActions } from "../store/uislice";
import { AiOutlineLoading } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const ModalUI = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const quantityInputRef = useRef();
  const emailInputRef = useRef();
  const dateInputRef = useRef();

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
      userId: parsedData.userId,
      amount: amountInputRef.current.value,
      quantity: quantityInputRef.current.value,
      clientEmail: emailInputRef.current.value,
      dueDate: dateInputRef.current.value,
    };

    const userIdIsValid = enteredData.userId.trim().length > 0;
    const amountIsValid = enteredData.amount > 0;
    const emailIsValid = enteredData.clientEmail.includes("@");
    const dueDate = enteredData.dueDate.trim().length > 0;

    if (!userIdIsValid || !amountIsValid || !emailIsValid || !dueDate) {
      alert("Invalid inputs");
    }

    try {
      const params = {
        ...enteredData,
        isPaid: false,
        overdue: false,
        businessEmail: parsedData.email,
      };
      const res = await fetch("/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      const data = await res.json();
      console.log(data);
      if (!data.status) {
        dispatch(uiActions.setIsError(true));
        dispatch(uiActions.setIsLoading(false));
        return;
      }
      handleClose();
    } catch (error) {}
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
              Product
            </Form.Label>
            <Form.Control
              type="text"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
              ref={titleInputRef}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="text-black font-semibold">Amount</Form.Label>
            <Form.Control
              type="number"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
              ref={amountInputRef}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 flex flex-col"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="text-black font-semibold">
              Quality
            </Form.Label>
            <Form.Control
              type="number"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
              ref={quantityInputRef}
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
              Due Date
            </Form.Label>
            <Form.Control
              type="Date"
              className="outline-0 px-2 py-1 bg-transparent border-2 border-slate-300 rounded-md"
              ref={dateInputRef}
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
        {isError && <p className="text-red-600 text-md">An error occurred!</p>}
      </div>
    </div>
  );
};

export default ModalUI;
