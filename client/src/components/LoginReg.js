import React from 'react';

import Login from './Login';
import Registration from './Registration';

import styles from "../styles/loginreg.module.css";

const LoginReg = (props) => {
    return (
        <div className={`container ${styles.container}`}>
            <Login />
            <Registration />
        </div>
    )
}

export default LoginReg