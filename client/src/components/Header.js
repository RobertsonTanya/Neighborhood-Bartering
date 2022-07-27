import React from "react";
import styles from "../styles/header.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import logo from "../images/logo.png";



const Header = (props) => {
  const { showLoginBtn, user, setUser } = props;
  const navigate = useNavigate();


  const logout = () => {
    axios.post("http://localhost:8000/api/users/logout",
    {},
    {
      withCredentials: true
    }
    )
    .then((res)=>{
      console.log(res.data);
      setUser({});
      navigate('/');
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
        </div>
        <div className={styles.navRight}>
        {!showLoginBtn || Object.keys(user).length ? null : (
            <button className={`${styles.loginBtn}`}>
              <Link to="/loginreg">Sign Up | Login</Link>
            </button> 
          )}
            {Object.keys(user).length ?
          <span className={styles.mainNav}>
            <span className={styles.leftSpan}>
              <Link to="/">Dashboard</Link> |
              <Link to="/create">Create Item</Link>
            </span>
            <span className={styles.rightSpan}>
              <span> | </span>
              <Link to={`/myItems/${user.userLoggedIn}`}>My Items</Link> | 
              {/* ^^I will make sure this has the proper authentication on it */}
              <Link to="/" onClick={logout}>Log Out</Link>
            </span>
          </span> : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
