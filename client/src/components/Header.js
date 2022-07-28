import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../images/logo.png";

import styles from "../styles/header.module.css";

const Header = (props) => {
  const { showLoginBtn, user, setUser } = props;
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    axios
      .post(
        "http://localhost:8000/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setUser({});
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const showNav = () => {
  //   showMenu ? "" : styles.hidden 
  // }

  return (
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

      
          <ul className={styles.mainNav}>
            {(!showLoginBtn && Object.keys(user).length === 0) ||
            (showLoginBtn && Object.keys(user).length) ? (
              <span className={styles.leftSpan}>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
              </span>
            ) : null}
            {Object.keys(user).length ? (
              <span className={styles.rightSpan}>
                <li>
                  <Link to="/create">Create Item</Link>
                </li>
                <li>
                  <Link to={`/myItems/${user.userLoggedIn}`}>My Items</Link>
                </li>
                <li>
                  <Link to="/" onClick={logout}>
                    Log Out
                  </Link>
                </li>
              </span>
            ) : null}
          </ul>
      </div>
    </div>
  );
};

export default Header;
