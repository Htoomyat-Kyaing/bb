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
  const [allTableData, setAllTableData] = useState([]);

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

  const fetchAllPermissions = async () => {
    const response = await fetch(`https://car.cbs.com.mm/api/v1/permissions`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
    });
    const data = await response.json();
    if (data !== null) {
      setAllTableData(data.data);
      // console.log(data.data);
    }
  };

  useEffect(() => {
    fetchPermissions();
    fetchAllPermissions();
    // setTrackingArray(checkedValuesArray);
  }, []);

  const removeValue = (valueToRemove, array) => {
    let index = array.indexOf(valueToRemove);
    if (index !== -1) {
      array.splice(index, 1); // Remove one element starting from the index
      // console.log("Value removed:", valueToRemove);
    } else {
      // console.log("Value not found in the array.");
    }
  };

  const handleCheckBox = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      checkedValuesArray.push(e.target.value);
      setTrackingArray((prevArray) => [...prevArray, parseInt(e.target.value)]);
    } else {
      removeValue(e.target.value, checkedValuesArray);
      setTrackingArray((prevArray) =>
        prevArray.filter((item) => item !== parseInt(e.target.value))
      );
    }
  };

  const checkedKeys = Object.keys(tableData);
  // console.log(checkedKeys);
  const checkedValues = Object.values(tableData);
  const checkedValuesArray = [];
  checkedValues.map((cv) => {
    cv.map((cv2) => {
      // console.log(cv2.id);
      checkedValuesArray.push(cv2.id);
      // return cv2.id;
    });
    // return cv[0].id;
  });
  // console.log(checkedValuesArray);

  //TODO:  NEEDS TO BE INITIALIZED
  const [trackingArray, setTrackingArray] = useState([...checkedValuesArray]);

  useEffect(() => {
    console.log(trackingArray);
  }, [trackingArray]);

  const keys = Object.keys(allTableData);
  // console.log(keys);

  const rrrrrr = (ttttt, checkedValuesArray) => {
    return ttttt?.map(
      (t) => {
        const jjjjj = checkedValuesArray.includes(t.id);
        if (jjjjj === true) {
          return (
            <td>
              <input
                onChange={handleCheckBox}
                className={"w-5 h-5 accent-black"}
                defaultChecked
                type="checkbox"
                name={t.name}
                id={t.id}
                value={t.id}
              />
            </td>
          );
        } else {
          return (
            <td>
              <input
                onChange={handleCheckBox}
                className={"w-5 h-5 accent-black"}
                type="checkbox"
                name={t.name}
                id={t.id}
                value={t.id}
              />
            </td>
          );
        }
      }
      // console.log("strt");
      // console.log(t);
      // <td>{t.name}</td>
      // console.log(checkedValuesArray.includes(t.id))

      // <td>
      //   <input
      //     // onChange={handleCheckBox}
      //     className={"w-5 h-5 accent-black"}
      //     type="checkbox"
      //     name={t.name}
      //     id={t.id}
      //   />
      // </td>
    );
  };

  const test = keys?.map((key) => (
    <tr className="">
      <th>{key}</th>
      {rrrrrr(allTableData[key], checkedValuesArray)}
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
          <button
            onClick={() => {
              console.log(trackingArray);
            }}
            className="px-6 py-2 rounded-md bg-button"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default RolePermissionDashboard;
