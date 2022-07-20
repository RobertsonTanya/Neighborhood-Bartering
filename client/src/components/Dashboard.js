import React from 'react'
import Post from './Post'
import styles from '../styles/dashboard.module.css';


function Dashboard() {
  return (
    <div className={`container ${styles.container}`}>

      <h1>GrocerySwap</h1>
      <div className={styles.dashboard}>
        <Post /><Post /><Post />
        <Post /><Post /><Post />
      </div>
    </div>
  )
}

export default Dashboard