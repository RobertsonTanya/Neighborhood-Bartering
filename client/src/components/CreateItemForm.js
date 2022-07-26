import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "./Header";

import styles from "../styles/createItemForm.module.css";


const CreateItemForm = (props) => {
  const { user, setUser } = props;

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [sugItem, setSugItem] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      itemName,
      description,
      sugItem,
      imgUrl,
    });
    axios
      .post(
        "http://localhost:8000/api/groceryswap/create",
        {
          itemName,
          description,
          sugItem,
          imgUrl,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
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
        <form onSubmit={onSubmitHandler} className={styles.form}>
          <h1>Create Item</h1>
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
              value="Add Item"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateItemForm;
