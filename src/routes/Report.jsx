import Select from "react-select";
import Pagination from "../components/Dashboard/Pagination";
import Table from "../components/Dashboard/Table";
// import DatetimeRangePicker from "react-datetime-range-picker";
import "../utility/daterange";
import { isToday } from "date-fns";
import { useEffect } from "react";

const options = [
  { value: "test 1", label: "test 1" },
  { value: "test 2", label: "test 2" },
  { value: "test 3", label: "test 3" },
];

const Report = () => {
  useEffect(() => {
    $(function () {
      var start = moment().subtract(29, "days");
      var end = moment();

      function cb(start, end) {
        $("#reportrange span").html(
          start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
        );
        // console.log(start, end);
      }

      $("#reportrange").daterangepicker(
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [
              moment().subtract(1, "days"),
              moment().subtract(1, "days"),
            ],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment().subtract(1, "month").startOf("month"),
              moment().subtract(1, "month").endOf("month"),
            ],
          },
        },
        cb
      );

      cb(start, end);
    });
  });
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

      <div className="flex items-center gap-2">
        <label htmlFor="">Filter :</label>
        <div
          id="reportrange"
          // style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%"
          className="border-2 border-[#FFCC00] rounded min-w-44 min-h-10 items-center flex px-2"
        >
          {/* <i class="fa fa-calendar"></i>&nbsp; */}
          <span></span>{" "}
          <img
            src="/public/chevron-down.svg"
            className="w-5 h-5 opacity-30 hover:opacity-50"
            alt=""
          />
        </div>
        <Select
          className="border-2 border-[#FFCC00] rounded min-w-44"
          placeholder="ယာဉ်အမျိုးအစား"
          options={options}
        />
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
        <select
          defaultValue={5}
          className="p-2 border-2 border-[#FFCC00] rounded"
          name=""
          id=""
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <span className="text-xl ">Per Page</span>
      </div>

      <div className="self-center max-w-sm md:self-start md:max-w-full">
        <Table />
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Report;
