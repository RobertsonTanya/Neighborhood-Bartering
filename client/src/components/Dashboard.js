import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "../styles/dashboard.module.css";
import Header from "./Header";

function Dashboard() {

  return (
    <div className={`container ${styles.container}`}>
      <Header showLoginBtn={true}/>
      <div className={styles.dashboard}>
        <Post /><Post /><Post />
        <Post /><Post /><Post />
      </div>
    </div>
  )
}

export default Dashboard