import DataTable from "react-data-table-component";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const Table = () => {
  const auth = `Bearer ${localStorage.getItem("access token")}`;
  const [report, setReport] = useState();
  const fetchReport = async () => {
    const response = await fetch("https://car.cbs.com.mm/api/v1/reports", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });

    const data = await response.json();
    if (data !== null) {
      setReport(data.carTypes);
      // console.log(data.carTypes);
    }
  };
  useEffect(() => {
    fetchReport();
  }, []);
  useEffect(() => {
    // console.log(report);
  }, [report]);
  const customStyles = {
    table: {
      style: {
        fontSize: "20px",
        width: "80vw",
      },
    },
    responsiveWrapper: {
      style: {
        borderRadius: "10px",
        boxShadow: "0 5px 5px 0px rgba(0, 0, 0,0.2)",
        // width: "100%",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#FFCC00",
        fontSize: "20px",
      },
    },
    headCells: {
      style: {
        width: "min-content",
        backgroundColor: "#FFCC00",
      },
    },
    rows: {
      style: {
        fontSize: "20px",
        height: "60px",
        "&:not(:last-of-type)": {
          borderBottomStyle: "solid",
          borderBottomWidth: "0px",
        },
      },
    },
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Vehicle Type",
      selector: (row) => row.type,
    },
    {
      name: "Vehicle Number",
      selector: (row) => row.vnumber,
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "",
      selector: (row) => row.setting,
    },
  ];

  const data = [
    {
      id: 1,
      date: "28/2/2024",
      type: "Medium",
      vnumber: "1F-1010",
      time: "9:45 AM",
      amount: 1000,
      setting: (
        <div className="flex gap-7">
          <img src="/eye.svg" alt="eye.svg" />
          <img src="/trash-2.svg" alt="trash-2.svg" />
        </div>
      ),
    },
    {
      id: 2,
      date: "28/2/2024",
      vtype: "Large",
      vnumber: "1R-1010",
      time: "10:00 AM",
      amount: 2000,
      setting: (
        <div className="flex gap-7">
          <img src="/eye.svg" alt="eye.svg" />
          <img src="/trash-2.svg" alt="trash-2.svg" />
        </div>
      ),
    },
    {
      id: 3,
      date: "28/2/2024",
      vtype: "Small",
      vnumber: "1F-1110",
      time: "10:15 AM",
      amount: 500,
      setting: (
        <div className="flex gap-7">
          <img src="/eye.svg" alt="eye.svg" />
          <img src="/trash-2.svg" alt="trash-2.svg" />
        </div>
      ),
    },
    {
      id: 4,
      date: "28/2/2024",
      vtype: "Medium",
      vnumber: "1F-1111",
      time: "11:21 AM",
      amount: 1000,
      setting: (
        <div className="flex gap-7">
          <img src="/eye.svg" alt="eye.svg" />
          <img src="/trash-2.svg" alt="trash-2.svg" />
        </div>
      ),
    },
    // {
    //   id: null,
    //   date: "",
    //   vtype: "",
    //   vnumber: "",
    //   time: "Total",
    //   amount: 4500,
    //   setting: (
    //     <div className="flex gap-7">
    //       {/* <img src="/eye.svg" alt="eye.svg" />
    //       <img src="/trash-2.svg" alt="trash-2.svg" /> */}
    //     </div>
    //   ),
    // },
  ];
  return (
    <>
      {report && (
        <DataTable
          columns={columns}
          data={report}
          customStyles={customStyles}
          // pagination
          paginationComponent={Pagination}
        />
      )}
    </>
  );
};

export default Table;
