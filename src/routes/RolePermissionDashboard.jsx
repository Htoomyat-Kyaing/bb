import { useLocation, useNavigate } from "react-router-dom";
import Table from "../components/RolePermissionDashboard/Table";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import CheckBox from "../components/RolePermissionDashboard/CheckBox";
import Table2 from "../components/RolePermissionDashboard/Table2";

const RolePermissionDashboard = () => {
  const location = useLocation();
  const [tableData, setTableData] = useState();

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
      </div>

      {/* <Table2 data={tableData} /> */}
    </>
  );
};

export default RolePermissionDashboard;
