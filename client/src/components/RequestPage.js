import React from 'react';
import TradeRequest from './TradeRequest';

import Header from "./Header";

import styles from '../styles/requestpage.module.css';


function Requests(props) {
  const { user, setUser } = props;


  return (
    <div className='container'>
      <Header user={user} setUser={setUser} showLoginBtn={true} />
    <div className={styles.requestpage}>
      <TradeRequest /><TradeRequest /><TradeRequest />
      <TradeRequest /><TradeRequest /><TradeRequest />
    </div>
    </div>
  )
}

export default Requests;