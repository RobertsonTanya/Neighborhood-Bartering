import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styles from "../styles/loginreg.module.css";

const Login = (props) => {
    const { setShowLogin, setUser } = props;
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    

    const login = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/users/login",
        {
            email: email,
            password: password,
        },
        {
            withCredentials: true
        })
        .then((res) => {
            console.log(res, "res");
            console.log(res.data, "is res data!");
            setUser(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            setErrorMessage(err.response.data.message);
        })
    }

    return (
        <div>
            <h1 className={styles.heading}>Log In</h1>
            <form className={styles.form} onSubmit={login}>
                <p className={styles.loginToggle}>Don't have login credentials yet? </p>
                <p className={styles.loginToggleLink} onClick={()=>setShowLogin(false)}>  Register here</p>
                {errorMessage ? <p className="error">{errorMessage}</p> : null}
                <div className={styles.inputContainer}>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.inputContainer}>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className={styles.submitBtn} type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;