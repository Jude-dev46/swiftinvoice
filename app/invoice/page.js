'use client'
import Sidebar from "../components/dashboardUI/Sidebar"
import MainInvoice from "../components/invoiceui/MainInvoice"

const Invoice = () => {
  return (
    <div className="bg-neutral-100 h-[100svh] flex w-full justify-between p-8 align-start">
     
         <Sidebar />
         
         <MainInvoice/>
    </div>
   
  )
}

export default Invoice