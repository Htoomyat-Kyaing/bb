import { Link, useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
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
          <h1 className="!text-base">Enter your One Time Password (OTP)</h1>
        </div>

        <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-9">
          <h2 className="text-lg text-center">
            One Time Password has been sent to your email address.
          </h2>

          <div className="flex items-center justify-center flex-1 gap-5">
            <input type="text" className="p-4 card-otp"></input>
            <input type="text" className="p-4 card-otp"></input>
            <input type="text" className="p-4 card-otp"></input>
            <input type="text" className="p-4 card-otp"></input>
          </div>

          <div className="flex items-center justify-between flex-1 gap-4">
            <Link className="text-lg" to={""}>
              00:25
            </Link>
            <Link className="text-lg font-bold" to={""}>
              Resend OTP
            </Link>
          </div>

          <div className="flex justify-center w-full mt-24 md:mt-0">
            <button className="card-button">Verify</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default VerifyOTP;
