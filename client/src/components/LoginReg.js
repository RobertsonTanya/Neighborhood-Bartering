import React, { useState } from 'react';

import Login from './Login';
import Registration from './Registration';
import Header from './Header';

import styles from "../styles/loginreg.module.css";

const LoginReg = (props) => {
    const { user, setUser } = props;
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className={`container ${styles.container}`}>
            <Header user={user} setUser={setUser} showLoginBtn={false} />
            {showLogin ?
                <Login setShowLogin={setShowLogin} setUser={setUser} />
            : 
                <Registration setShowLogin={setShowLogin} />
            }
        </div>
    )
}

export default LoginReg