import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

export default function App() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(undefined);
  useEffect(() => {
    setAuthenticated(localStorage.getItem("authenticated"));
    if (authenticated === false || authenticated === null) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    // console.log(authenticated);
    if (authenticated === false || authenticated === null) {
      navigate("/login");
    }
  }, [authenticated]);
  // if (authenticated === false) {
  //   <Navigate to={"/log"}></Navigate>;
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
}
// }
