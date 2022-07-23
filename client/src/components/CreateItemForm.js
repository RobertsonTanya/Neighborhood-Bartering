import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <label>Item Name: </label>
          <input
            name="itemName"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          {/* {errors.itemName ? <p>{errors.itemName.message}</p> : null} */}
          <label>Short Description: </label>
          <textarea
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* {errors.description ? <p>{errors.description.message}</p> : null} */}
          <label>Suggest Item: </label>
          <input
            name="sugItem"
            type="text"
            value={sugItem}
            onChange={(e) => setSugItem(e.target.value)}
          />
          {/* {errors.sugItem ? <p>{errors.sugItem.message}</p> : null}  */}
          <label>Img Url: </label>
          <input
            name="imgUrl"
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          {/* {errors.imgUrl ? <p>{errors.imgUrl.message}</p> : null} */}
          <input
            name="altTrade"
            type="checkbox"
            checked={altTrade}
            onChange={(e) => setAltTrade(e.target.value)}
          />
          {/* {errors.altTrade ? <p>{errors.altTrade.message}</p> : null} */}
          <textarea
            name="altMessage"
            type="text"
            value={altMessage}
            onChange={(e) => setAltMessage(e.target.value)}
          />
          {/* {errors.altMessage ? <p>{errors.altMessage.message}</p> : null} */}
          <div>
            <input type="submit" value="Add Item" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateItemForm;
