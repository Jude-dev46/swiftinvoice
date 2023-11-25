import Sidebar from "../components/dashboardUI/Sidebar";
import Main from "../components/dashboardUI/Main";

const Dashboard = () => {
  return (
    <div className="h-full lg:h-[100svh] flex w-full relative">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
