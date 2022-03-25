import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as C from './App.style'
import StoreImg from './assets/store.png'
import OrderImg from './assets/order.png'
import ProfileImg from './assets/profile.png'
import ReactTooltip from 'react-tooltip'

import HomeScreen from './pages/HomeScreen';
import { MenuItem } from './components/MenuItem';
import PrivateRoute from './components/PrivateRoute';

export default () => {
    return (
        <BrowserRouter>
            <C.Container>
                <C.Menu>
                    <MenuItem title='Loja' icon={StoreImg} link='/' />
                    <MenuItem title='Pedidos' icon={OrderImg} link='/orders' />
                    <MenuItem title='Perfil' icon={ProfileImg} link='/profile' />
                </C.Menu>
                <C.PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/orders">
                            <h1>order</h1>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <h1>profile</h1>
                        </PrivateRoute>
                    </Switch>
                </C.PageBody>
            </C.Container>
            <ReactTooltip id='tip-top' place='top' effect='solid' />
            <ReactTooltip id='tip-right' place='right' effect='solid' />
        </BrowserRouter>
    );
}