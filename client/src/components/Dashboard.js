import React from 'react'
import Post from './Post'
import styles from '../styles/dashboard.module.css';
import logo from '../images/logo.png'


function Dashboard() {
  return (
    <div className={`container ${styles.container}`}>

      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.dashboard}>
        <Post /><Post /><Post />
        <Post /><Post /><Post />
      </div>
    </div>
  )
}

export default Dashboard