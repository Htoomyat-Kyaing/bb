import { Link } from "react-router-dom";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { cn } from "../../utility/cn";
import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isUserBtnActive, setIsUserBtnActive] = useState(false);
  return (
    <nav className="flex-col items-center hidden min-h-full gap-6 pt-12 md:flex j bg-sidebar min-w-64">
      <Link to={"/"}>
        <img className="sidebar-logo" src="/Sidebar/logo.png" alt="" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button path="/" name="Dashboard" img="home.svg" />
        <Button
          path="/carpassticket"
          name="Car Pass Ticket"
          img="file-text.svg"
        />
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
            path={"/setupandconfig"}
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
    </nav>
  );
};

export default Sidebar;
