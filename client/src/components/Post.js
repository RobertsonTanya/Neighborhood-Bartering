import React from 'react'
import styles from '../styles/post.module.css';


function Post() {
  return (
    <div className={styles.box}>
      <h2>Name of Item</h2>
      <p className={styles.dateTime}>Date and Time Posted</p>
      <div className={styles.split}>
        <img src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="fruits" />
        <p>Short Description</p>
      </div>
      <div className={styles.split}>
        <p>Suggested Item</p>
        <button>Request Trade</button>
      </div>
      <input type="checkbox" name="" id="alternate" />
      <label htmlFor="alternate">Alternate Item</label>
      <input className={styles.altInput} type="text" name="" id="" />
    </div>
  )
}

export default Post