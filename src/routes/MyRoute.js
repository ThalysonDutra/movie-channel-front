import React from "react";
import { Route, Navigate } from 'react-router-dom';
import { PropTypes } from "prop-types";

export default function MyRoute({component: Component, isClosed, ...rest}){

    const isLoggedIn = false;

    if(isClosed && !isLoggedIn){
        return(
            <Navigate
            to={{pathname: '/home', state: {prevPath: rest.location.pathname} }}
            />
        );
    }
    return <Route {...rest} component={Component} />;

}

MyRoute.defaultProps = {
    isClosed: false,
}

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
}