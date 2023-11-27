"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/dashboardUI/Sidebar";
import MainNotifications from "../components/notificationsui/MainNotifications";

const NotificationPages = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem("data");
        const parsedData = JSON.parse(storedData);

        setEmail(parsedData.email);
      }
    })();
  }, []);

  return (
    <div className="h-[100svh] flex w-full relative">
      <Sidebar />
      <MainNotifications email={email} />
    </div>
  );
};

export default NotificationPages;
