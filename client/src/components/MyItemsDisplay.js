import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/myItemsDisplay.module.css";

const MyItemsDisplay = () => {
  const [allMyItems, setAllMyItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/groceryswap/myitems")
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
      .delete(`http://localhost:8000/api/bookshelf/${idFromBelow}`)
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
      <div className={`container ${styles.container}`}>
        <div>Header Area</div>
        <div className={styles.table-Container}>
          <ul className="table-header">
            <li>Items</li>
            <li>Description</li>
            <li>Date</li>
            <li>Actions</li>
          </ul>
        </div>
        <div className="table-Container">
          {allMyItems.map((items, index) => {
            {
              console.log(items);
            }
            return (
              <ul key={index}>
                <li>{items.itemName}</li>
                <li>{items.description}</li>
                <li>Date</li>
                <li>
                  <button>
                    <Link to={`/UpdateItem/${items._id}`}> Update </Link>
                  </button>
                  <button onClick={() => deleteHandler(items._id, index)}>
                    Delete
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MyItemsDisplay;
