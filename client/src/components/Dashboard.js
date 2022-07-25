import React from "react";
import Post from "./Post";
import styles from "../styles/dashboard.module.css";
import logo from "../images/logo.png";
import Header from "./Header";

function Dashboard() {
  return (
    <div className={`container ${styles.container}`}>
      <Header login={true}/>
      <div className={styles.dashboard}>
        <Post /><Post /><Post />
        <Post /><Post /><Post />
      </div>
    </div>
  )
}

export default Dashboard