import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <nav className="sidebar-container">
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
