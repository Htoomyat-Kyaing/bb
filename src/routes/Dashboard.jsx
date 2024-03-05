import { useNavigate } from "react-router-dom";
import Pagination from "../components/Dashboard/Pagination";
import Table from "../components/Dashboard/Table";

const Dashboard = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/carpassticket");
  };
  return (
    <div className="flex flex-col px-4 py-2 md:px-4 md:py-7 gap-7">
      <div className="flex flex-row-reverse w-full">
        <button onClick={handleClick} className="text-sm card-button max-w-32">
          Car Pass Ticket
        </button>
      </div>

      <div className="flex flex-col w-full gap-4 md:flex-row md:gap-12">
        <div className="flex flex-col gap-5 md:gap-[60px]">
          <div className="md:w-[515px] ">
            <p className="text-base md:text-3xl">ယနေ့ ဝင်ရောက်သော</p>
            <p className="text-xl font-bold md:text-3xl ">ယာဉ်အမျိုးအစားများ</p>
          </div>
          <div className="w-full md:w-[515px] h-[151px] bg-dashboard-display divide-x-2 flex justify-between items-center  py-7 *:flex-grow divide-white rounded-md shadow-md">
            <div className="flex flex-col items-center justify-center gap-5 text-2xl">
              <p className="text-sm ">ယာဉ််ကြီး</p>
              <span className="text-2xl md:text-[40px]">8</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 text-2xl">
              <p className="text-sm ">ယာဉ်လတ်</p>
              <span className=" text-2xl md:text-[40px]">73</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 text-2xl">
              <p className="text-sm ">ယာဉ်သေး</p>
              <span className="text-2xl md:text-[40px]">63</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-[60px]">
          <div className="md:w-[515px] ">
            <p className="text-base md:text-3xl">ယနေ့ ရရှိသော</p>
            <p className="text-xl font-bold md:text-3xl ">စုစုပေါင်းငွေပမာဏ</p>
          </div>
          <div className="w-full md:w-[515px] h-[151px] bg-dashboard-display divide-x-2 flex justify-between items-center  py-7 *:flex-grow divide-white rounded-md shadow-md">
            <div className="flex items-center justify-start gap-5 text-2xl indent-9">
              <p className="text-2xl md:text-[40px]">4,500 ကျပ်</p>
            </div>
          </div>
        </div>
      </div>

      {/* <Table />
      <Pagination /> */}
    </div>
  );
};

export default Dashboard;
