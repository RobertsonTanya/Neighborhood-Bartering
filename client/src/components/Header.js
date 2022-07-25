import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";
import axios from 'axios';

import logo from "../images/logo.png";



const Header = (props) => {
  const { login } = props;

  const [user, setUser] = useState({});

  useEffect(()=>{
    axios.get("http://localhost:8000/api/users",
    {
      withCredentials: true
    })
    .then((res)=>{
      console.log(res.data);
      setUser(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, []);

  const logout = () => {
    axios.post("http://localhost:8000/api/users/logout")
    .then((res)=>{
      console.log(res.data);
      setUser({});
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          {login ? (
            <button className={`${styles.large} ${styles.loginBtn}`}>
              <Link to="/loginreg">Sign Up | Login</Link>
            </button>
          ) : null}
        </div>
        <div className={styles.navRight}>
        {login ? (
            <button className={`${styles.small} ${styles.loginBtn}`}>
              <Link to="/loginreg">Sign Up | Login</Link>
            </button> 
          ) : null}
          <span className={styles.mainNav}>
            <span className={styles.leftSpan}>
              <Link to="/">Dashboard</Link> |
              <Link to="/create">Create Item</Link>
            </span>
            {Object.keys(user).length ?
            <span className={styles.rightSpan}>
              <span> | </span>
              <Link to={`/myitems/${user.username}`}>My Items</Link> | 
              {/* ^^I will make sure this has the proper authentication on it */}
              <Link to="/" onClick={logout}>Log Out</Link>
            </span> : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
