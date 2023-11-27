"use client";
import { useEffect, useState } from "react";

import Sidebar from "../components/dashboardUI/Sidebar";
import MainClient from "../components/MainClient";
import ClientModal from "../components/clientUI/ClientModal";

const Clients = () => {
  const [show, setShow] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/clients", {
        method: "GET",
      });
      const data = await res.json();

      setClients(data.data);
    })();
  }, []);

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
      <MainClient handleShow={handleShow} clients={clients} />
    </div>
  );
};

export default Clients;
