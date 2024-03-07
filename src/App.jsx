import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function App() {
  // const navigate = useNavigate();
  // const [authenticated, setauthenticated] = useState(
  //   localStorage.getItem("authenticated")
  // );
  // useEffect(() => {
  //   console.log(authenticated);
  //   // if (!authenticated || authenticated === null) {
  //   //   navigate("/login");
  //   // }
  // }, []);
  // if (!authenticated || authenticated === null) {
  //   // navigate("/login");
  // } else {
  return (
    <main className="flex min-w-full min-h-screen">
      <Sidebar />
      <section className="flex-grow">
        <div className="">
          <Navbar />
        </div>
        <Outlet />
      </section>
    </main>
  );
  // }
}
