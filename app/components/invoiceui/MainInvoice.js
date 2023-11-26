import { uiActions } from "../store/uislice";
import { useSelector, useDispatch } from "react-redux";

import MainHeader from "../dashboardUI/MainHeader";
import RecentInvoices from "../dashboardUI/RecentInvoices";

const MainInvoice = ({ handleShow }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isOpen);

  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div
      className={`bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-4 md:px-12 lg:px-24 py-8`}
    >
      <MainHeader welcomeText={"Invoices"} />
      <div onClick={() => dispatch(uiActions.setIsOpen(false))}>
        <RecentInvoices
          title={"Invoices"}
          isInvoice={true}
          handleShow={handleShow}
        />
      </div>
    </div>
  );
};

export default MainInvoice;
