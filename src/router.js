import React from 'react';
import {Route,Routes} from 'react-router-dom';

import Home from "src/pages/home";

import Page from "src/pages/page";


export default class APPRoutes extends React.Component{
    render() {
        return  (<Routes>
                <Route path="/"  element={  <Home></Home>} ></Route>
            <Route path="/page"  element={<Page></Page>} ></Route>
        </Routes>)
    }
}





