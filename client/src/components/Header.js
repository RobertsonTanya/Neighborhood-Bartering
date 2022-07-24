import React from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = (props) => {
  const { login } = props;

  return (
    <div>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          {login ? (
            <button className={styles.dashboardbtn}>
              <Link to="/register">Sign Up | Login</Link>
            </button>
          ) : null}
        </div>
        <div className={styles.navRight}>
          <Link to="/create">Create Item</Link> |
          <Link to="/myitems">My Items</Link> |
          {/* ^^I will make sure this has the proper authentication on it */}
          <Link to="/">Dashboard</Link> |<Link to="/">Log Out</Link>
          {/* Logout will be something different when that axios request is made */}
        </div>
      </div>
    </div>
  );
};

export default Header;
