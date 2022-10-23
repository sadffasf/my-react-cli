import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import Nav from './components/Nav';
import APPRoutes from "./router";
ReactDom.render(
    (<Router>
        <Nav />
        <APPRoutes />
    </Router>),
    document.getElementById('app')
)
