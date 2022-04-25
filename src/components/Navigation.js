import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const items = [
  { name: "Home", to: "/", exact: true },
  { name: "About Us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "Blogs", to: "/blogs" },
  { name: "Post", to: "/post" },
  { name: "Login", to: "/login" },
];

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="navList">
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                className="navItem"
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
