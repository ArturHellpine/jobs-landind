import React from 'react';
import './styles/App.css'
import MainRouter from "./router/MainRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>

    );
};

export default App;