import React, {useContext} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {AuthContext} from "../context/authContext";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = e => {
        e.preventDefault()
        setIsAuth(true)
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form>
                <MyInput type="text" name="login"></MyInput>
                <MyInput type="password" name="password"></MyInput>
                <MyButton onClick={login}>Login</MyButton>
            </form>
        </div>

    );
};

export default Login;