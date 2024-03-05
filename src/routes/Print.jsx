import { Link, useNavigate } from "react-router-dom";

const Print = () => {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };
  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  return (
    <main className="flex flex-col items-center min-w-full min-h-screen gap-8 px-4 py-8">
      {/* <img
        className="absolute top-0 right-0 w-32 h-32"
        src="/circle.svg"
        alt="/circle.svg"
      /> */}

      <Link to={"/"}>
        <img className="logo" src="/logo.png" alt="" />
      </Link>

      <div className="flex items-center justify-end w-full max-w-[1000px]">
        <div className="min-w-[333px] flex justify-end items-end">
          <button
            className="card-button !max-w-[150px]"
            onClick={() => {
              navigate("/");
            }}
          >
            Dashboard
          </button>
        </div>
      </div>

      <form
        className="card !max-w-[1000px] !min-h-[635px]"
        onSubmit={handleSubmit}
      >
        <div className="card-title flex justify-between !py-2">
          <h1 className="!text-xl">Car Pass Ticket</h1>

          <div className="min-w-[146px] min-h-[56px] flex items-center justify-center gap-2">
            <p>Number</p>
            <span>:</span>
            <div className="rounded w-full max-w-[60px] min-h-[56px] bg-white flex items-center justify-center">
              25
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-4 py-9">
          <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:gap-8 md:flex-row">
            <label className="w-1/3 md:!text-2xl" htmlFor="date">
              Date
            </label>
            <input
              className="flex-grow h-full px-4 text-base border-2 rounded min-h-12 border-amber-300"
              name="date"
              onChange={handleChange}
              type="date"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:gap-8 md:flex-row">
            <label className="w-1/3 md:!text-2xl" htmlFor="type">
              Select Vehicle Type
            </label>
            <div className="relative w-full max-w-[593px]">
              <select className="flex-grow w-full h-full px-4 text-base border-2 rounded appearance-none min-h-12 border-amber-300">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <img
                className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 right-[10px] top-1/2"
                src="/chevron-down.svg"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:gap-8 md:flex-row">
            <label className="w-1/3 md:!text-2xl" htmlFor="type">
              Vehicle Number
            </label>
            <input
              className="flex-grow h-full px-4 text-base border-2 rounded min-h-12 border-amber-300"
              name="text"
              // onChange={handleChange}
              type="text"
              placeholder="Enter Vehicle Number"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:gap-8 md:flex-row">
            <label className="w-1/3 md:!text-2xl" htmlFor="type">
              Timestamp
            </label>
            <input
              className="flex-grow h-full px-4 text-base border-2 rounded min-h-12 border-amber-300"
              name="text"
              // onChange={handleChange}
              type="text"
              placeholder="4:12PM"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:gap-8 md:flex-row">
            <label className="w-1/3 md:!text-2xl" htmlFor="type">
              Amount to pay
            </label>
            <input
              className="flex-grow h-full px-4 text-base border-2 rounded min-h-12 border-amber-300"
              name="text"
              // onChange={handleChange}
              type="text"
              placeholder="$0"
            />
          </div>

          <div className="flex justify-center w-full">
            <button className="card-button md:!min-w-[640px] md:!min-h-[69px] flex gap-2 justify-center items-center">
              <img className="w-6 h-6 " src="/printer.svg" alt="printer.svg" />
              <p className="text-2xl font-bold">Save & Print</p>
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Print;
