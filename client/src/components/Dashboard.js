import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Post from "./Post";
import Header from "./Header";

import styles from "../styles/dashboard.module.css";



function Dashboard(props) {
  const { user, setUser } = props;
  const [items, setItems] = useState([{}]);

  useEffect(()=>{
      axios.get("http://localhost:8000/api/GrocerySwap/allItems")
      .then((res)=>{
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err)=>{
        console.log(err.response);
      })
  }, []);


  return (
    <div className={`container ${styles.container}`}>
      <Header user={user} setUser={setUser} showLoginBtn={true} />
      {items.length >= 1 ? (
        <div className={styles.dashboard}>
          {items.map((item, index) => {
            return <Post key={index} item={item} user={user} />;
          })}
        </div>
      ) : (
        <div className={styles.noItemsMsg}>
          <h3>No Items Up for Trade</h3>
          <button className={styles.noItemsBtn}>
            <Link to="/create">Create New Item</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard