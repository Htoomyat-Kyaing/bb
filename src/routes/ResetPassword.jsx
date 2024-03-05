import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/login");
  };

  return (
    <main className="flex flex-col items-center justify-center min-w-full min-h-screen gap-24 md:justify-start md:gap-4 md:mt-24">
      <img
        className="absolute top-0 right-0 hidden w-32 h-32 md:block"
        src="/circle.svg"
        alt="circle.svg"
      />

      <Link to={"/"}>
        <img className="hidden md:block logo" src="/logo.png" alt="" />
      </Link>

      <Link to={"/"}>
        <img className="md:hidden max-w-48" src="/logo_mobile.png" alt="" />
      </Link>

      <form className="card" onSubmit={handleSubmit}>
        <div className="card-title">
          <h1 className="!text-base md:text-2xl">Reset your password</h1>
        </div>

        <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-9">
          <div className="flex flex-col gap-2">
            <label className="!text-sm md:text-2xl" htmlFor="newPassword">
              New Password
            </label>
            <input
              className="flex-grow h-full text-base border-2 rounded indent-5 min-h-12 border-amber-300"
              name="newPassword"
              onChange={handleChange}
              type="password"
              placeholder="Enter your new password"
              autoComplete="newPassword"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="!text-sm md:text-2xl" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="flex-grow h-full text-base border-2 rounded indent-5 min-h-12 border-amber-300"
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              placeholder="***********"
              autoComplete="confirmPassword"
            />
          </div>

          <div className="flex justify-center w-full mt-24 md:mt-0">
            <button className="card-button !text-lg md:text-2xl">
              Confirm
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default ResetPassword;
