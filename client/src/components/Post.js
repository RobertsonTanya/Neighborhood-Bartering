import React, {useEffect, useState} from 'react';
import axios from 'axios'
import styles from '../styles/post.module.css';


function Post(props) {
  const { item, user } = props;
  const date = item.createdAt ? item.createdAt.slice(0, 10) : null;
  const [commentText, setCommentText] = useState("");
  const [commentSubmitDummy, setCommentSubmitDummy] = useState(false);

  const handleSubmitComment = async (e, postId) => {
    // e.preventDefault();
    console.log("jkljdfljasdlkfjasdklfjalskj");
    const newComment = {
      text: commentText,
    };
    try {
      const response = await axios.post(
        `http://localhost:8000/api/comment/${postId}`,
        newComment,
        { withCredentials: true }
      );
      console.log("line 35 in Feed.js", response);
      setCommentSubmitDummy(!commentSubmitDummy);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={styles.box}>
      <h2>{item.itemName}</h2>
      <p className={styles.dateUser}><span>Posted by: </span>{user.userLoggedIn}</p>
      <p className={styles.dateUser}><span>Posted: </span>{date}</p>
      <div className={styles.split}>
        <span className={styles.imgContainer}>
          <img className={styles.img} src={item.imgUrl} alt={item.name} />
        </span>
        <p>{item.description}</p>
      </div>
      <div className={styles.sugItem}>
        <div className={styles.suggested}>
      </div>
        <p>{item.sugItem}</p>
        {/* <button className={styles.button}>Request Trade</button> */}
      </div>
        <h4>Comments:</h4>
        {item.comments ?
          item.comments.map((comment, index) => {
            console.log("Line 60",comment);
            return(
            <div key={index}>
              <p>
                {comment.user_id} commented{" "} 
                {comment.text}
              </p>
            </div>)
          }):null}
        <form onSubmit={(e) => handleSubmitComment(e, item._id)}>
          <textarea
          placeholder="Comment to Start Trade"
            name=""
            id=""
            onChange={(e) => setCommentText(e.target.value)}
            cols="15"
            rows="4"
          ></textarea>
          <button className={styles.button} type="submit">Comment</button>
        </form>
      <div>
      </div>
    </div>
  )
}

export default Post