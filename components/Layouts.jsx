import React from "react";

const Layout = ({ children }) => {
  const nav = () => (
    <nav class="navbar navbar-dark bg-dark">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link text-light" href="">
            Home
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-light" href="">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="">
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
  return (
    <React.Fragment>
      {nav()} {children}
    </React.Fragment>
  );
};

export default Layout;
