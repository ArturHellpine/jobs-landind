import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.";
import VacancyDetailPage from "../pages/VacancyDetailPage";

const RouterProvider = () => {

    return (
        <Routes>
            <Route
                path={ '/home' }
                element={ <HomePage /> }
            />
            <Route
                path={ '/vacancy/:id' }
                element={ <VacancyDetailPage /> }
            />
            <Route
                path={ '/*' }
                element={ <Navigate replace to={ '/home' } /> }
            />
        </Routes>
    );
};

export default RouterProvider;