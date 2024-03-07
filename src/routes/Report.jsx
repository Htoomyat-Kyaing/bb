import Pagination from "../components/Dashboard/Pagination";
import Table from "../components/Dashboard/Table";

const Report = () => {
  return (
    <div className="flex flex-col gap-6 px-4 py-4 md:px-7 md:py-7">
      <div className="flex w-full gap-5">
        <h1 className=" text-lg md:text-2xl font-['Libre_Baskerville'] font-bold flex-grow">
          Report
        </h1>
        <button className="hidden md:block bg-[#FFCC00] min-w-32 min-h-11 ">
          Pdf
        </button>
        <button className="hidden md:block bg-[#FFCC00] min-w-32 min-h-11 ">
          Excel
        </button>
      </div>

      {/* Mobile buttons */}
      <div className="flex justify-between min-w-full md:hidden">
        <button className="px-10 py-2 text-xs rounded-md shadow-md md:hidden bg-button">
          Filter
        </button>
        <div className="flex gap-2">
          <button className="px-10 py-2 text-xs rounded-md shadow-md md:hidden bg-button">
            Excel
          </button>
          <button className="px-10 py-2 text-xs rounded-md shadow-md md:hidden bg-button">
            Pdf
          </button>
        </div>
      </div>

      <div className="flex justify-between min-w-full">
        <p className="text-xl ">စုစုပေါင်း ငွေပမာဏ</p>
        <p className="text-xl ">4,500 ကျပ်</p>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xl ">Count</span>
        <select className="p-2" name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option selected value="5">
            5
          </option>
        </select>
        <span className="text-xl ">Per Page</span>
      </div>

      <div className="self-center max-w-sm md:max-w-full">
        <Table />
      </div>

      <Pagination />
    </div>
  );
};

export default Report;
