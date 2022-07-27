import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import Header from "./Header";
import styles from "../styles/dashboard.module.css";


function Dashboard(props) {
  const { user, setUser } = props;
  const [items, setItems] = useState([{}]);
  const [commentText, setCommentText]= useState("");

  useEffect(()=>{
    async function getData(){
      try{
        const response= await axios.get("http://localhost:8000/api/GrocerySwap/allItems", {
          withCredentials: true}
          );
        console.log(response.data);
          setItems(response.data);
      } catch(error){
        console.log(error);
      }
    };
  getData();
}, []);


  return (
    <div className={`container ${styles.container}`}>
      <Header user={user} setUser={setUser} showLoginBtn={true} />
      <div className={styles.dashboard}>
        {items ?
          items.map((item, index)=>{
            return (
              <Post key={index} item={item} user={user} />
            )
          })
        : null}
      </div>
    </div>
  )
}

export default Dashboard