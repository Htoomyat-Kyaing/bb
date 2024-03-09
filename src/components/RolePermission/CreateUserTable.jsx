import { useState } from "react";

const CreateUserTable = () => {
  const [input, setInput] = useState("test");
  const URL = "https://car.cbs.com.mm/api/v1/roles";
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const fetchCreateUser = () => {
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
  return (
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
          fetchCreateUser();
        }}
        className="card-button"
      >
        Create
      </button>
    </div>
  );
};

export default CreateUserTable;
