import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Route, RouteProps} from "react-router-dom";
import {selectCurrentUser} from "../features/auth/authSlice";

export function PrivateRoute({children, ...rest}: RouteProps) {
    const user = useSelector(selectCurrentUser);

    return (
        <Route {...rest} element={(e: any) => {
            console.log(e)
        }}/>
    );
}


/*
user ? (
    children
) : (
    <Navigate
        replace
        to={{
            pathname: "/login",
            state: {from: location}
        }}
    />
)*/
