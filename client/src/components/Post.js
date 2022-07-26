import React from 'react';

import styles from '../styles/post.module.css';


function Post(props) {
  const { item, user } = props;
  const date = item.createdAt ? item.createdAt.slice(0, 10) : null;


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
      <div className={styles.split}>
        <p>{item.sugItem}</p>
        <button className={styles.button}>Request Trade</button>
      </div>
    </div>
  )
}

export default Post