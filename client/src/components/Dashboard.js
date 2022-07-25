import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "./Post";
import Header from "./Header";

import styles from "../styles/dashboard.module.css";



function Dashboard() {
  const [user, setUser] = useState({});
  const [items, setItems] = useState([{}]);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/users",
    {
      withCredentials: true
    })
    .then((res)=>{
      console.log(res.data);
      setUser(res.data);
    })
    .then(()=>{
      if(Object.keys(user).length){
        axios.get(`/api/GrocerySwap/myItems/${user.username}`)
        .then((res)=>{
          console.log(res.data);
          setItems(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
      } else {
        axios.get("http://localhost:8000/api/GrocerySwap/allItems")
        .then((res)=>{
          console.log(res.data);
          setItems(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    })
    .catch((err)=>{
      console.log(err);
      setUser({});
    })
    console.log('I fire once');
  }, []);


  return (
    <div className={`container ${styles.container}`}>
      <Header showLoginBtn={true}/>
      <div className={styles.dashboard}>
        {items ?
          items.map((item, index)=>{
            <Post key={index} item={item} />
          })
        : null}
      </div>
    </div>
  )
}

export default Dashboard