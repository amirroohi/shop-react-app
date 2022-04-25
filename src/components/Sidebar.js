import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="/profile/dashboard" className="sideItem" activeClassName="activeSideLink">
            dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/downloads" className="sideItem" activeClassName="activeSideLink">
            downloads
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
