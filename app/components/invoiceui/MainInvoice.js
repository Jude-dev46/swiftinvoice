import MainHeader from "../dashboardUI/MainHeader";
import RecentInvoices from "../dashboardUI/RecentInvoices";

const MainInvoice = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-10/12 flex flex-col px-24 py-8">
      <MainHeader welcomeText={"Invoices"} />
      <RecentInvoices title={"Invoices"} isInvoice={true} />
    </div>
  );
};

export default MainInvoice;
