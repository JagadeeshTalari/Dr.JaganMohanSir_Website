import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">AboutUs</NavLink>
          </li>
          <li>
            <NavLink to="/ourservices">Our Services</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">ContactUs</NavLink>
          </li>
          <li class="rmenu">
            <NavLink to="/userlogin">Login</NavLink>
          </li>
          <li class="rmenu">
            <NavLink to="/admin">Admin</NavLink>
          </li>
          <li class="rmenu">
            <NavLink to="/userregistration">User Registration</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
