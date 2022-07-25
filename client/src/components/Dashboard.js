import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "./Post";
import Header from "./Header";

import styles from "../styles/dashboard.module.css";



function Dashboard() {
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
      <Header showLoginBtn={true}/>
      <div className={styles.dashboard}>
        {items ?
          items.map((item, index)=>{
            return (
              <Post key={index} item={item} />
            )
          })
        : null}
      </div>
    </div>
  )
}

export default Dashboard