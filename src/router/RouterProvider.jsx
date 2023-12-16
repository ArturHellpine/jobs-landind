import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.";
import VacancyDetailPage from "../pages/VacancyDetailPage";

const RouterProvider = () => {
    const paths = {
        home: '/',
        vacancy: 'vacancy'
    }
    return (
        <Routes>
            <Route path={ paths.home } element={ <HomePage /> } />
            <Route path={`${paths.vacancy}/:id`} element={ <VacancyDetailPage /> } />
            <Route path='/*' element={ <Navigate replace to={ paths.home } /> } />
        </Routes>
    );
};

export default RouterProvider;