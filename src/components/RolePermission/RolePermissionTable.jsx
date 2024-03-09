import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import RolePermissionSettings from "./RolePermissionSettings";
import { NavLink } from "react-router-dom";
import CreateUserTable from "./CreateUserTable";

export default function RolePermissionTable() {
  const fetchDeleteRole = (id) => {
    fetch(`https://car.cbs.com.mm/api/v1/roles/${id}`, {
      method: "delete",
      // mode: "no-cors",
      headers: {
        Accept: "application.json",
        "content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
    });
  };
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "rgba(255, 204, 0, 1)",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
      },
    },
    rows: {
      style: {
        fontSize: "14px",
      },
    },
  };

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
    },
    {
      name: "Role",
      selector: (row) => row.name,
    },
    {
      name: "Settings",
      selector: (row) => row.settings,
      cell: (row) => (
        <div className="flex gap-8">
          <img className="w-5" src="/RolePermission/edit.svg"></img>
          <img
            className="w-5"
            onClick={() => {
              fetchDeleteRole(row.id);
              // window.location.reload();
              fetchRoles();
            }}
            src="/RolePermission/trash.svg"
          ></img>
        </div>
      ),
    },
    {
      name: "Access",
      selector: (row) => row.access,
      cell: (row) => (
        <NavLink
          to={`/roles/${row.id}/permissions`}
          className="text-[#FFB001] text-base hover:cursor-pointer hover:text-amber-300"
        >
          Access Permission
        </NavLink>
      ),
    },
  ];
  const [roles, setRoles] = useState();
  const [input, setInput] = useState("test");
  const URL = "https://car.cbs.com.mm/api/v1/roles";
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const createRoles = () => {
    fetch(URL, {
      method: "post",
      // mode: "no-cors",
      headers: {
        Accept: "application.json",
        "content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
      body: JSON.stringify({
        name: input,
      }),
    });
  };
  const fetchRoles = async () => {
    const response = await fetch("https://car.cbs.com.mm/api/v1/roles", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
    });
    const data = await response.json();
    if (data !== null) {
      setRoles(data.data);
      // console.log(data.data);
    }
  };
  useEffect(() => {
    fetchRoles();
  }, []);
  // useEffect(() => {
  //   console.log(input);
  // }, [input]);
  return (
    <>
      <DataTable
        className="rdt_TableHead"
        columns={columns}
        data={roles}
        selectableRows
        customStyles={customStyles}
      />
      <div className="card">
        <div className="card-title">
          <h1 className="!text-black !text-base">Create Role</h1>
        </div>
        <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:gap-8 md:flex-row">
          <label className="!text-sm min-w-40" htmlFor="userInput">
            Role
          </label>
          <input
            className="flex-grow h-full text-base border-2 rounded indent-5 min-h-12 border-amber-300"
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="Role Name"
            autoComplete="rolename"
          />
        </div>
        <button
          onClick={() => {
            createRoles();
            // window.location.reload();
            fetchRoles();
          }}
          className="card-button"
        >
          Create
        </button>
      </div>
    </>
  );
}
