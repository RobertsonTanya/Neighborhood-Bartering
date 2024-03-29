import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Header from "./Header";

import styles from "../styles/myItemDisplay.module.css";

const MyItemsDisplay = (props) => {
  const { user, setUser } = props;
  const [allMyItems, setAllMyItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("users?", user.userLoggedIn);
    axios
      .get(
        `http://localhost:8000/api/groceryswap/myItems/${user.userLoggedIn}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setAllMyItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/groceryswap/${idFromBelow}`)
      .then((res) => {
        console.log("deleted successfully");
        console.log(res);
        const filteredItems = allMyItems.filter((items) => {
          return items._id !== idFromBelow;
        });
        setAllMyItems(filteredItems);
        navigate(`/myitems/${user.userLoggedIn}`);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div className={`container ${styles.container}`}>
      <Header user={user} setUser={setUser} showLoginBtn={true} />
      { allMyItems.length >= 1 ?  
      <div className={styles.bothTablesContainer}>
        <div className={styles.tableContainer}>
          <ul className={styles.tableHeader}>
            <li className={styles.items}>Items</li>
            <li className={styles.description}>Description</li>
            <li className={styles.suggested}>Suggested Items</li>
            <li className={styles.actions}>Actions</li>
          </ul>
        </div>
        <div className={styles.tableContainer}>
          {allMyItems.map((items, index) => {
            {
              console.log(items);
            }
            return (
              <ul className={styles.tableRow} key={index}>
                <li className={styles.items}>{items.itemName}</li>
                <li className={styles.description}>{items.description}</li>
                <li className={styles.sugItem}>{items.sugItem}</li>
                <li className={styles.actions}>
                  <button className={styles.tablebtn}>
                    <Link to={`/update/${items._id}`}> Update </Link>
                  </button>
                  <button
                    className={styles.tablebtn}
                    onClick={() => deleteHandler(items._id, index)}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      : 
      <div className={styles.noItemsMsg}>
        <h3>No Items to Display</h3>
        <button className={styles.noItemsBtn}>
          <Link to="/create">Create New Item</Link>
        </button>
      </div> }
    </div>
  );
};
export default MyItemsDisplay;
