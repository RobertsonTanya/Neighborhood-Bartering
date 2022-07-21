import React from 'react'
import TradeRequest from './TradeRequest'
import styles from '../styles/requestpage.module.css';
import logo from '../images/logo.png'

function Requests() {
  return (
    <div>
      <img className={styles.logo} src={logo} alt="logo" />
    <div className={styles.requestpage}>
      <TradeRequest /><TradeRequest /><TradeRequest />
      <TradeRequest /><TradeRequest /><TradeRequest />
    </div>
    </div>
  )
}

export default Requests