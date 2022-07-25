import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import styles from "../styles/createItemForm.module.css";

const CreateItemForm = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [sugItem, setSugItem] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [altTrade, setAltTrade] = useState("");
  const [altMessage, setAltMessage] = useState("");
  // const [createdBy, setCreatedBy] = useState("");
  // const [date, setDate] = useState(""); >> update model with "date: type" with date validators
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      itemName,
      description,
      sugItem,
      imgUrl,
      altTrade,
      altMessage,
    });
    axios
      .post(
        "http://localhost:8000/api/groceryswap/create",
        {
          itemName,
          description,
          sugItem,
          imgUrl,
          altTrade,
          altMessage,
        }
        // {
        //   withCredentials: true,
        // }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.error.errors);
        setErrors(err.response.data.error.errors);
      });
  };

  return (
    <div className={`container ${styles.container}`}>
      <Header login={false} />
      <h1>Create an Item for Trade</h1>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmitHandler} className={styles.form}>
          <label>Item Name: </label>
          <input
            className={styles.input}
            name="itemName"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          {/* {errors.itemName ? <p>{errors.itemName.message}</p> : null} */}

          <label>Short Description: </label>
          <br></br>
          <textarea
            className={styles.input}
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* {errors.description ? <p>{errors.description.message}</p> : null} */}
          <br></br>
          <label>Suggest Item: </label>
          <input
            className={styles.input}
            name="sugItem"
            type="text"
            value={sugItem}
            onChange={(e) => setSugItem(e.target.value)}
          />
          {/* {errors.sugItem ? <p>{errors.sugItem.message}</p> : null}  */}
          <label>Img Url: </label>
          <input
            className={styles.input}
            name="imgUrl"
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          {/* {errors.imgUrl ? <p>{errors.imgUrl.message}</p> : null} */}
          <div  className={styles.addBtnContainer}>
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
