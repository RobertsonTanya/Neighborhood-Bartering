import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import styles from "../styles/dashboard.module.css";
import logo from "../images/logo.png";

function Dashboard() {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.navigation}>
        <div className={styles.nav1}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          <button className={styles.dashboardbtn}>
            <Link to="/">Dashboard</Link>
          </button>
        </div>
        <div className={styles.nav2}>
          <Link to="/create">Create Item</Link> |
          <Link to="/myitems">My Items</Link> |
          {/* ^^I will make sure this has the proper authentication on it */}
          <Link to="/">Log Out</Link>
          {/* Logout will be something different when that axios request is made */}
        </div>
      </div>
      <div className={styles.dashboard}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Dashboard;
