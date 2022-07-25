import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

const UpdateMyItems = (prop) => {
  const { id } = useParams();
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [sugItem, setSugItem] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/groceryswap/${id}`)
      .then((res) => {
        console.log(res.data);
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
        navigate("/myitems");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return <div>UpdateMyItems</div>;
};

export default UpdateMyItems;
