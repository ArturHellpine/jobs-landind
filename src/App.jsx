import React from 'react';
import MainRouter from "./router/MainRouter";
import { BrowserRouter } from "react-router-dom";
import './styles/App.css'

const App = () => {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>

    );
};

export default App;