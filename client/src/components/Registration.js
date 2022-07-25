import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from "../styles/registration.module.css";



const Registration = (props) => {
    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    const register = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/users/register",
        user,
        {
            withCredentials: true
        })
        .then((res) => {
            console.log(res.data);
            setUser({
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
            setConfirmReg(
                "Thank you for registering, you can now log in!",
            );
            setErrors({});
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }


    return (
        <div>
            <h1 className={styles.heading}>Register</h1>
            {confirmReg ? <h4 className="success">{confirmReg}</h4> : null}
            <form className={styles.form} onSubmit={register}>
                <div className={styles.inputContainer}>
                    <label>Username</label>
                    {errors.username ? (
                        <span className="error">
                            {errors.username.message}
                        </span>
                    ) : null}
                    <input type="text" name="username" value={user.username} onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.inputContainer}>
                    <label>Email</label>
                    {errors.email ? (
                        <span className="error">
                            {errors.email.message}
                        </span>
                    ) : null}
                    <input type="email" name="email" value={user.email} onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.inputContainer}>
                    <label>Password</label>
                    {errors.password ? (
                        <span className="error">
                            {errors.password.message}
                        </span>
                    ) : null}
                    <input type="password" name="password" value={user.password} onChange={(e) => handleChange(e)} />
                </div>
                <div className={styles.inputContainer}>
                    <label>Confirm Password</label>
                    {errors.confirmPassword ? (
                        <span className="error">
                            {errors.confirmPassword.message}
                        </span>
                    ) : null}
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={(e) => handleChange(e)} />
                </div>
                <button className={styles.submitBtn} type="submit">Register Me</button>
            </form>
        </div>
    )
}

export default Registration;