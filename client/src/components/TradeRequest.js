import React from 'react'
import styles from '../styles/traderequests.module.css';

function TradeRequest() {
  return (
    <div>
      <div className={styles.request}>
      <div className={styles.box}>
        <h2>Item Name</h2>
        <img className={styles.img} src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="fruits" />
        <p>Trade For:</p>
        <p>Suggested Item/Alt Item</p>
      </div>
      <div className={styles.buttons}>
        <button>Accept</button>
        <button>Decline</button>
      </div>
      </div>
    </div>
  )
}

export default TradeRequest