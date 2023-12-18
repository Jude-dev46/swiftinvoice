"use client";

import { useEffect, useState } from "react";

import isAuth from "../components/utils/isAuth";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainClient from "../components/clientui/MainClient";
import ClientModal from "../components/clientUI/ClientModal";

const Clients = () => {
  const [show, setShow] = useState(false);
  const [clients, setClients] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const parsedData = JSON.parse(storedData);

    (async () => {
      if (typeof window !== "undefined") {
        const res = await fetch("/api/clients", {
          method: "GET",
        });
        const data = await res.json();

        setClients(data.data);
        setEmail(parsedData.email);
      }
    })();
  }, [clients]);

  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }

  return (
    <div className="h-full lg:h-[100svh] flex w-full relative">
      {show && <ClientModal show={show} handleClose={handleClose} />}
      <Sidebar />
      <MainClient handleShow={handleShow} clients={clients} email={email} />
    </div>
  );
};

export default isAuth(Clients);
