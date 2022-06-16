import React from 'react';
import {Routes, Route, Redirect} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Shop from '../pages/Shop'

const AppRouter = () => {
    return (
        <Routes>
            {authRoutes.map(({path, Component})=>{
                console.log(path);
                <Route key={path} path={path} element={<Component/>} exact/>
            })}
            {publicRoutes.map(({path, Component})=>{
                // console.log({path, Component});
                <Route key={path} path={path} element={<Component/>} exact/>
            })}
            <Route key={"/"} path={"/"} element={<Shop/>} exact/>--------------------------------
            {console.log(Shop)}
        </Routes>
        // console.log(publicRoutes) 
    );
};

export default AppRouter;