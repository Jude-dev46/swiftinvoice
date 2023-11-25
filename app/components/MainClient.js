'use client'
import MainHeader from "./dashboardUI/MainHeader";
import ClientInvoice from "./invoiceui/ClientInvoice";

const MainClient = () => {
  return (
    
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-10/12 flex flex-col px-24 py-8">
    <MainHeader welcomeText={"Clients"} />
    
    <ClientInvoice   isClient={true}/>

  </div>
  
  
  )
}

export default MainClient