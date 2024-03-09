import { useEffect } from "react";

const RolePermissionSettings = ({ id }) => {
  const fetchDeleteRole = (id) => {
    fetch(`https://car.cbs.com.mm/api/v1/roles/3`, {
      method: "delete",
      // mode: "no-cors",
      headers: {
        Accept: "application.json",
        "content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
    });
  };
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div className="flex gap-8">
      <img className="w-5" src="/RolePermission/edit.svg"></img>
      <img
        className="w-5"
        onClick={() => {
          fetchDeleteRole();
          window.location.reload();
        }}
        src="/RolePermission/trash.svg"
      ></img>
    </div>
  );
};

export default RolePermissionSettings;
