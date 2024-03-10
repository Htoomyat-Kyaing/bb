import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
function UpdateUser(props) {
  const [updateData, setUpdateData] = useState([]);
  const [roles, setRoles] = useState([]);
  const getRoles = useCallback(async () => {
    try {
      const response = await fetch("https://car.cbs.com.mm/api/v1/roles", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${props.authToken}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to get roles: ${response.status}`);
      }

      const rolesData = await response.json();
      setRoles(rolesData.data);
    } catch (error) {
      console.error("Error getting roles:", error);
    }
  });
  useEffect(() => {
    getRoles();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    console.log(updateData);
  };
  const handleRoleUpdate = (selectedOption) => {
    setUpdateData((prevInputs) => ({
      ...prevInputs,
      role: selectedOption.name,
    }));
  };
  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `https://car.cbs.com.mm/api/v1/users/${updateData.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${props.authToken}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: updateData.name,
            email: updateData.email,
            phone: updateData.phone,
            role_id: updateData.role_id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update user: ${response.status}`);
      }
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <div
      className="flex flex-col mt-5 overflow-hidden shadow-lg gap-y-3 rounded-xl"
      style={{ width: "600px", height: "450px" }}
    >
      <h1 className="flex items-center w-full h-16 px-10 text-lg font-bold text-white bg-yellow-500">
        Edit User
      </h1>
      <form className="flex flex-col mt-5 gap-y-5" onSubmit={handleUpdate}>
        <div
          className="grid items-center gap-x-5 px-11 h-11"
          style={{ gridTemplateColumns: "1fr 300px" }}
        >
          <span className="text-lg font-semibold">Username*</span>
          <input
            className="h-full px-3 border border-gray-600 rounded"
            placeholder={props.name}
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div
          className="grid items-center gap-x-5 px-11 h-11"
          style={{ gridTemplateColumns: "1fr 300px" }}
        >
          <span className="text-lg font-semibold">Phone*</span>
          <input
            className="h-full px-3 border border-gray-600 rounded"
            placeholder={props.phone}
            type="tel"
            name="phone"
            onChange={handleChange}
            required
          />
        </div>
        <div
          className="grid items-center gap-x-5 px-11 h-11"
          style={{ gridTemplateColumns: "1fr 300px" }}
        >
          <span className="text-lg font-semibold">Email*</span>
          <input
            className="h-full px-3 border border-gray-600 rounded"
            placeholder={props.email}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div
          className="grid items-center gap-x-5 px-11 h-11"
          style={{ gridTemplateColumns: "1fr 300px" }}
        >
          <span className="text-lg font-semibold">Role</span>
          <Select
            name="role_id"
            className="w-full rounded-md react-select h-11"
            classNamePrefix="select"
            options={roles.map((role) => ({
              value: role.id,
              label: role.name,
            }))}
            isClearable={false}
            onChange={handleRoleUpdate}
          />
        </div>
        <div className="flex justify-start w-full h-11">
          <input
            className="mx-10 text-base font-semibold bg-yellow-500 rounded-md w-28 h-11 hover:shadow-md hover:cursor-pointer"
            type="submit"
            name="Add"
          />
        </div>
      </form>
    </div>
  );
}
export default UpdateUser;
