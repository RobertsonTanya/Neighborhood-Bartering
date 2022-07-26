import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Header from "./Header";

import styles from "../styles/updateMyItems.module.css";


const UpdateMyItems = (props) => {
  const { user, setUser } = props;
  const { id } = useParams();

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [sugItem, setSugItem] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    console.log("use effct is running");
    axios
      .get(`http://localhost:8000/api/groceryswap/${id}`)
      .then((res) => {
        console.log("=====", res.data);
        setItemName(res.data.itemName);
        setDescription(res.data.description);
        setSugItem(res.data.sugItem);
        setImgUrl(res.data.imgUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateItemHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/groceryswap/${id}`, {
        itemName,
        description,
        sugItem,
        imgUrl,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate(`/myitems/${user.username}`);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  
  return (
    <div className={`container ${styles.container}`}>
      <Header user={user} setUser={setUser} showLoginBtn={false} />
      <div className={styles.formContainer}>
        <form onSubmit={updateItemHandler} className={styles.form}>
          <label>Item Name: </label>
          <input
            className={styles.input}
            name="itemName"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          {errors.itemName ? <p className={`error ${styles.errors}`}>{errors.itemName.message}</p> : null}


          <label>Short Description: </label>
          <textarea
            className={styles.input}
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description ? <p className={`error ${styles.errors}`}>{errors.description.message}</p> : null}


          <label>Suggested Item: </label>
          <input
            className={styles.input}
            name="sugItem"
            type="text"
            value={sugItem}
            onChange={(e) => setSugItem(e.target.value)}
          />
          {errors.sugItem ? <p className={`error ${styles.errors}`}>{errors.sugItem.message}</p> : null} 


          <label>Image Url: </label>
          <input
            className={styles.input}
            name="imgUrl"
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          {errors.imgUrl ? <p className={`error ${styles.errors}`}>{errors.imgUrl.message}</p> : null}


          <div className={styles.addBtnContainer}>
            <input
              className={styles.addItemBtn}
              type="submit"
              value="Update Item"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyItems;
