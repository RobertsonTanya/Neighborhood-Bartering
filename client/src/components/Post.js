import React from 'react'
import styles from '../styles/post.module.css';


function Post(props) {
  const { item } = props;

  return (
    <div className={styles.box}>
      <h2>{item.itemName}</h2>
      <p className={styles.dateTime}>{item.createdAt}</p>
      <div className={styles.split}>
        <img className={styles.img} src={item.imgUrl} alt={item.name} />
        <p>{item.description}</p>
      </div>
      <div className={styles.split}>
        <p>{item.sugItem}</p>
        <button className={styles.button}>Request Trade</button>
      </div>
      <input type="checkbox" name="" id="alternate" />
      <label htmlFor="alternate">Alternate Item</label>
      <input className={styles.altInput} type="text" name="" id="" />
    </div>
  )
}

export default Post