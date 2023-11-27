import Sidebar from "../components/dashboardUI/Sidebar";
import MainAccount from "../components/accountui/MainAccount";

const page = () => {
  return (
    <div className="min-h-[100svh] flex w-full relative">
      <Sidebar />
      <MainAccount />
    </div>
  );
};

export default page;
