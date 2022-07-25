import React, { useState } from 'react';

import Login from './Login';
import Registration from './Registration';
import Header from './Header';

import styles from "../styles/loginreg.module.css";

const LoginReg = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className={`container ${styles.container}`}>
            <Header showLoginBtn={true} />
            {showLogin ?
                <Login setShowLogin={setShowLogin} />
            : 
                <Registration setShowLogin={setShowLogin} />
            }
        </div>
    )
}

export default LoginReg