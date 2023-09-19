import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav className="bg-slate-200 p-4 text-center">
        <ul className="flex space-x-6 justify-center items-center">
          <NavLink to="/"> Home</NavLink>

          <NavLink to="/about"> About</NavLink>

          <NavLink to="/services"> Services</NavLink>

          <NavLink to="/users"> Users</NavLink>

          <NavLink to="/contact"> Contact Us</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
