import { Link, useNavigate } from "react-router-dom";
import Button from "../Sidebar/Button";
import { cn } from "../../utility/cn";

import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isUserBtnActive, setIsUserBtnActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 shadow-md md:justify-end bg-card-title md:bg-none min-h-16">
        <img
          onClick={() => {
            console.log("mobile nav");
            setMobileNav(!mobileNav);
          }}
          className="w-6 h-6 md:hidden"
          src="/material-symbols_menu.svg"
          alt=""
        />

        <figure className="relative flex items-center justify-end gap-2 md:justify-center min-w-32">
          <img
            onClick={() => {
              console.log("logout");
              localStorage.setItem("authenticated", false);
              navigate("/login");
            }}
            className="w-10 h-10 rounded-full "
            src="/Navbar/avatar.png"
            alt="avatar.png"
          />
          <figcaption className="flex-col hidden md:flex">
            <p className="text-sm font-semibold">Mark Feehily</p>
            <p className="text-xs ">Admin</p>
          </figcaption>
        </figure>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute z-50 flex flex-col items-center justify-start h-full min-h-[900px] gap-6 pt-12 md:hidden bg-card-title bg-sidebar min-w-64",
          mobileNav ? "" : "hidden"
        )}
      >
        <Link to={"/"}>
          <img className="w-[200px]" src="/Sidebar/logo.png" alt="" />
        </Link>
        <div className="flex flex-col items-center justify-center gap-1">
          <Button path="/" name="Dashboard" img="home.svg" />
          <Button path="/print" name="Car Pass Ticket" img="file-text.svg" />
          <Button path="/view-report" name="Report" img="file-text.svg" />
          <div
            className={cn(
              "flex items-center gap-1 py-3 pl-2 bg-white rounded min-w-60",
              isActive ? "" : "bg-opacity-50"
            )}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <img
              className="w-4 h-4"
              src={`/Sidebar/settings.svg`}
              alt={"settings.svg"}
            />
            <button>Set up & Config</button>
          </div>

          <div className={cn("flex flex-col gap-1", isActive ? "" : "hidden")}>
            <Button
              path={"/generalsetting"}
              name={"General Setting"}
              img="settings.svg"
            ></Button>
            <Button path="/car-types" name="Car Types" img="settings.svg" />
            <div
              className={cn(
                "flex items-center gap-3 py-3 pl-2 bg-white rounded min-w-60",
                isUserBtnActive ? "" : "bg-opacity-50"
              )}
              onClick={() => {
                setIsUserBtnActive(!isUserBtnActive);
              }}
            >
              <img
                className="w-4 h-4"
                src={`/Sidebar/users.svg`}
                alt={"users.svg"}
              />
              <button>Users</button>
            </div>
            <div
              className={cn(
                "flex flex-col gap-1",
                isUserBtnActive ? "" : "hidden"
              )}
            >
              <Button path="/allusers" name="All Users" img="users.svg" />
              <Button
                path="/rolepermission"
                name="Role Permission"
                img="users.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
