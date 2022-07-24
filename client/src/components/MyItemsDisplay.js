import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/myItemDisplay.module.css";
import Header from "./Header";

const MyItemsDisplay = () => {
  const [allMyItems, setAllMyItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/groceryswap/allitems") //change to myitems later
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
        navigate("/myitems");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* {if (createdBy) ?  } */}
      <div className={styles.container}>
        <Header login={false} />
        <div className={styles.tableContainer}>
          <ul className={styles.tableHeader}>
            <li>Items</li>
            <li>Description</li>
            <li>Suggest Items</li>
            <li>Actions</li>
          </ul>
        </div>
        <div className={styles.tableContainer}>
          {allMyItems.map((items, index) => {
            {
              console.log(items);
            }
            return (
              <ul className={styles.tableRow} key={index}>
                <li>{items.itemName}</li>
                <li>{items.description}</li>
                <li>{items.sugItem}</li>
                <li>
                  <button className={styles.tablebtn}>
                    <Link to={`/UpdateItem/${items._id}`}> Update </Link>
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
      {/* : message } */}
    </div>
  );
};
export default MyItemsDisplay;
