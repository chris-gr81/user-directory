import { Link, Outlet } from "react-router-dom";
import "./Root.scss";
import Sidebar from "../components/sidebar/Sidebar";

function Root() {
  return (
    <div className="root-body">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
