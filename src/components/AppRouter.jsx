import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/route";
import {AuthContext} from "../context/authContext";
import Login from "../pages/login";
import App from "../App";

const RoutList = () => {

    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    })
    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <BrowserRouter>
                <Routes>
                    { isAuth
                        ? privateRoutes.map(route =>  <Route path={route.path} element={route.element} key={route.path}/>)
                        : publicRoutes.map(route =>  <Route path={route.path} element={route.element}  key={route.path}/>)
                    }
                    <Route path="*" element={<Login/>}/>
                </Routes>
                <App />
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default RoutList;