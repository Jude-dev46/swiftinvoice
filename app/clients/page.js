'use client'
import Sidebar from "../components/dashboardUI/Sidebar"
import MainClient from "../components/MainClient"


const Clients = () => {
  return (
    <div className="h-[100svh] flex w-full">
     
         <Sidebar />
           
         <MainClient />
    </div>
   
  )
}

export default Clients