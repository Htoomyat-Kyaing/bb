import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const URL =
  //   "https://car.cbs.com.mm/api/v1/login?email=yeyint@gmail.com&password=asdfasdf";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // console.log(URL);
    // fetch(URL, {
    //   method: "post",
    //   mode: "no-cors",
    //   headers: {
    //     accept: "application.json",
    //     "content-Type": "application/json",
    //   },
    //   body: {
    //     // email: "yeyint@gmail.com",
    //     // password: "asdfasdf",
    //   },
    // });
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
          <h1 className="!text-base">Login to your account</h1>
        </div>

        <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-9">
          <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:gap-8 md:flex-row">
            <label className="!text-sm min-w-40" htmlFor="userInput">
              Email or Phone Number
            </label>
            <input
              className="flex-grow h-full text-base border-2 rounded indent-5 min-h-12 border-amber-300"
              name="userInput"
              onChange={handleChange}
              type="text"
              placeholder="Email or Phone Number"
              autoComplete="userInput"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:gap-8 md:flex-row">
            <label className="!text-sm min-w-40" htmlFor="password">
              Password
            </label>
            <input
              className="flex-grow h-full text-base border-2 rounded indent-5 min-h-12 border-amber-300"
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="***********"
              autoComplete="password"
            />
          </div>

          <div className="flex flex-col items-center justify-between flex-1 gap-10 md:flex-row">
            <button className="card-button">Login</button>
            <Link className="mt-24 text-sm md:mt-0" to={"/forgot-password"}>
              Forgot Password?
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
