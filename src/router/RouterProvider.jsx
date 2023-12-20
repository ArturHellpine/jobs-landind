import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.";
import ContactFormPage from "../pages/ContactFormPage";
import SuccessPage from "../pages/SuccessPage";

const RouterProvider = () => {
    return (
        <Routes>
            <Route
                path={ '/home' }
                element={ <HomePage /> }
            />
            <Route
                path={ '/contact' }
                element={ <ContactFormPage /> }
            />
            <Route
                path={ '/success' }
                element={ <SuccessPage /> }
            />
            <Route
                path={ '/*' }
                element={ <Navigate replace to={ '/home' } /> }
            />
        </Routes>
    );
};

export default RouterProvider;