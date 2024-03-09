import { useLocation, useNavigate } from "react-router-dom";
import Table from "../components/RolePermissionDashboard/Table";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import CheckBox from "../components/RolePermissionDashboard/CheckBox";
import Table2 from "../components/RolePermissionDashboard/Table2";
import { key } from "localforage";

const RolePermissionDashboard = () => {
  const location = useLocation();
  const [tableData, setTableData] = useState([]);

  const URL = `https://car.cbs.com.mm/api/v1${location.pathname}`;

  const navigate = useNavigate();
  const handleBackArrow = () => {
    navigate(-1);
  };

  const fetchPermissions = async () => {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
    });
    const data = await response.json();
    if (data !== null) {
      setTableData(data.data);
      // console.log(data.data);
    }
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  const rrrrrr = (ttttt) => {
    return ttttt.map((t) => (
      // console.log("strt");
      // console.log(t);
      // <td>{t.name}</td>
      <td>
        <input
          // onChange={handleCheckBox}
          className="w-5 h-5 accent-black"
          type="checkbox"
          name={t.name}
          id=""
        />
      </td>
    ));
  };

  const keys = Object.keys(tableData);
  const test = keys?.map((key) => (
    <tr className="">
      <th>{key}</th>
      {rrrrrr(tableData[key])}
    </tr>
  ));
  // const test = keys?.map((key) => tableData[key].map((t) => console.log(t)));
  // const moduleNames = keys?.map((key) => <th key={key}>{key}</th>);
  // console.log(headers);
  // const rows = keys?.map((key) => console.log(tableData[key]));
  // console.log(rows);

  return (
    <>
      <div className="flex flex-col px-4 py-7 gap-7">
        <img
          onClick={handleBackArrow}
          className="w-6 h-6"
          src="/arrow-left.svg"
          alt=""
        />

        <h1 className="text-2xl font-['Libre_Baskerville'] font-bold">
          Admin Permission
        </h1>

        <table className="border border-separate roundedCorners ">
          <thead className="bg-[#FFCC00]">
            <tr className="">
              <th>Module Name</th>
              <td>View</td>
              <td>Create</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>{test}</tbody>
        </table>

        <div>
          <button className="px-6 py-2 rounded-md bg-button">Update</button>
        </div>
      </div>
    </>
  );
};

export default RolePermissionDashboard;
