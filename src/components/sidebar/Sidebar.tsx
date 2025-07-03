import { Link } from "react-router-dom";
import "./sidebar.scss";
import logo from "../../assets/images/logo.png";

function Sidebar() {
  return (
    <nav className="sidebar-container">
      <img className="sidebar-logo" src={logo} alt="CGR userDirectory" />
      <Link to="overview">
        <button className="sidebar-item">Übersicht</button>
      </Link>
      <Link to="create">
        <button className="sidebar-item">Erstellen</button>
      </Link>
    </nav>
  );
}

export default Sidebar;
