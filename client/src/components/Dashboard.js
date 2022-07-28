import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Post from "./Post";
import Header from "./Header";

import styles from "../styles/dashboard.module.css";



function Dashboard(props) {
  const { user, setUser } = props;
  const [items, setItems] = useState([{}]);
  const [commentSubmitDummy, setCommentSubmitDummy] = useState(false) ;

  useEffect(()=>{
      axios.get("http://localhost:8000/api/groceryswap/allitems")
      .then((res)=>{
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err)=>{
        console.log(err.response);
      })
  }, []);

  const updateState= (index, newComment)=>{
    setItems(items.map((item, i)=>{
      if( index===i){
        item.comments.push(newComment)
      
      }
      return item
    }))
  }
  return (
    <div className={`container ${styles.container}`}>
      <Header user={user} setUser={setUser} showLoginBtn={true} />
      {items.length >= 1 ? (
        <div className={styles.dashboard}>
          {items.map((item, index) => {
            return <Post key={index} item={item} user={user} commentSubmitDummy={commentSubmitDummy} setCommentSubmitDummy=
            {setCommentSubmitDummy}  index={index} updateState={updateState} />;
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