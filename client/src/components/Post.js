import React, { useState} from 'react';
import axios from 'axios'
import styles from '../styles/post.module.css';


function Post(props) {
  const {index ,updateState, item, user, setCommentSubmitDummy, commentSubmitDummy } = props;
  const date = item.createdAt ? item.createdAt.slice(0, 10) : null;
  const [commentText, setCommentText] = useState("");
  const [errors,setErrors]= useState({});

  const handleSubmitComment = async (e, postId) => {
    e.preventDefault();
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
      setCommentText("");
      updateState(index, response.data.newComment);

    } catch (error) {
      console.log(error);
      setErrors(error.response.data.errors.text)
    }
  };

  return (
    <div className={`${styles.box} ${(Object.keys(user).length) ? "" : "loggedOut"}`}>
      <h2>{item.itemName}</h2>
      <p className={styles.dateUser}><span>Posted by: </span>{item.createdBy && item.createdBy.username}</p>
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
      </div>
      <div className={styles.commentScroll}>
        <h4>Comments:</h4>
        {item.comments ?
          item.comments.map((comment, index) => {
            return(
              <div key={index}>
              <p>
                {comment.user_id.username} commented:{"  "} 
                {comment.text}
              </p>
              </div>)
            }):null}
      </div>
      <form className={`${(Object.keys(user).length) ? "" : styles.hidden} ${styles.commentForm}`} onSubmit={(e) => handleSubmitComment(e, item._id)}>
        <textarea value={commentText} className= {styles.commentBox}
        placeholder="Comment to Start Trade"
          name=""
          id=""
          onChange={(e) => setCommentText(e.target.value)}
          cols="15"
          rows="4"
        ></textarea>
        {errors && errors.message ? <p>{errors.message}</p> : null}
        <button className={styles.button} type="submit">Comment</button>
      </form>
    </div>
  )
}

export default Post