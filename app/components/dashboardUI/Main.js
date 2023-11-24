import InvoiceInfo from "./InvoiceInfo";
import MainHeader from "./MainHeader";
import RecentInvoices from "./RecentInvoices";

const Main = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-10/12 flex flex-col px-24 py-8">
      <MainHeader />
      <InvoiceInfo />
      <RecentInvoices />
    </div>
  );
};

export default Main;
