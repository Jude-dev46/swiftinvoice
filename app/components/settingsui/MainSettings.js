import Dropdown from "../ui/Dropdown";
import Toggle from "../ui/Toggle";
import MainHeader from "../dashboardUI/MainHeader";

const MainSettings = () => {
  return (
    <div className="text-black bg-gradient-to-br from-yellow-100 via-red-100 to-violet-100 w-full lg:w-10/12 flex flex-col px-8 md:px-12 lg:px-24 py-8">
      <MainHeader welcomeText={"Settings"} />

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg">
          <p className="text-[1.2rem] font-semibold">General</p>
          <hr className=" border-black my-4 border-2" />
          <div className="flex items-start gap-28">
            <ul>
              <li>Delete Invoices after</li>
            </ul>

            <Dropdown items={["Never", "Ever"]} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <p className="text-[1.2rem] font-semibold">Dashboard</p>
          <hr className=" border-black my-4 border-2" />
          <div className="flex items-start gap-28">
            {/* [#ffd875]  */}
            <ul className=" text-sm font-medium text-black rounded-lg">
              <li className="w-full  border-gray-200 rounded-t-lg ">
                <div className="flex items-center ps-3">
                  <input
                    id="show income-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 accent-[#1916B9]  border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label
                    for="show income-checkbox"
                    className="w-full py-3 ms-2 text-[1.1rem] font-medium text-black"
                  >
                    Show Income
                  </label>
                </div>
              </li>

              <li className="w-full  border-gray-200 rounded-t-lg ">
                <div className="flex items-center ps-3">
                  <input
                    id="show paid invoices-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 accent-[#1916B9]  border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label
                    for="show paid invoices-checkbox"
                    className="w-full py-3 ms-2 text-[1.1rem] font-medium text-black"
                  >
                    Show Paid Invoices
                  </label>
                </div>
              </li>

              <li className="w-full  border-gray-200 rounded-t-lg">
                <div className="flex items-center ps-3">
                  <input
                    id="show unpaid invoices-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 accent-[#1916B9]  border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label
                    for="show unpaid invoices-checkbox"
                    className="w-full py-3 ms-2 text-[1.1rem] font-medium text-black"
                  >
                    Show Unpaid Invoices
                  </label>
                </div>
              </li>
            </ul>

            <Dropdown items={["USD", "NGN"]} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <p className="text-[1.2rem] font-semibold">Account</p>
          <hr className=" border-black my-4 border-2" />
          <div className="flex items-start justify-between">
            <ul>
              <li>Remember Login Credentials</li>
            </ul>
        
           <Toggle />
            
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg space-y-4">
          <p className="text-[1.2rem] font-semibold">Notifications</p>
          <hr className=" border-black my-4 border-2 " />
          <div className="flex items-start justify-between">
            <ul>
              <li>Remember Login Credentials</li>
            </ul>
        
          <p>All Invoices</p>
            
          </div>

          <div className="flex items-start justify-between">
            <ul>
              <li>Remember Login Credentials</li>
            </ul>
        
           <p>All Invoices</p>
            
          </div>
<div className="inline text-end py-4">
          <Toggle /></div>
        </div>
      </div>
    </div>
  );
};

export default MainSettings;
