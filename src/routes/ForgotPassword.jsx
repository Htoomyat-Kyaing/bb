import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    navigate("/verifyotp");
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
          <h1 className="!text-base">Forgot your password?</h1>
        </div>

        <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-9">
          <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:gap-8 md:flex-row">
            <label className="!text-sm min-w-40" htmlFor="email">
              Enter your email address
            </label>
            <input
              className="flex-grow h-full text-base border-2 rounded indent-5 min-h-12 border-amber-300"
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Email address"
              autoComplete="email"
            />
          </div>

          <div className="flex items-center justify-center flex-1 gap-4 mt-24 md:mt-0 md:justify-end">
            <button className="card-button">Continue</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default ForgotPassword;
