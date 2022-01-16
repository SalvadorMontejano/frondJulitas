import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Crud/Menu';

import Pasteles from './Crud/pasteles';
import Postres from './Crud/postres';



import InsertarPelicula from './Crud/CProducto';
import DetallesPelicula from './Crud/RProducto';
import UpdatePelicula from './Crud/UProducto';
import DeletePelicula from './Crud/DProducto';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Menu />
                    <Switch>
                        <Route exact path="/" component={Pasteles} />
                        <Route exact path="/postre" component={Postres} />
                        <Route exact path="/create" component={InsertarPelicula} />
                        <Route exact path="/detalles/:id" render={props => {
                            var id = props.match.params.id;
                            return <DetallesPelicula id={id} />
                        }} />
                        <Route exact path="/update/:id" render={props => {
                            var id = props.match.params.id;
                            return <UpdatePelicula id={id} />
                        }} />
                        <Route exact path="/delete/:id" render={props => {
                            var id = props.match.params.id;
                            return <DeletePelicula id={id} />
                        }}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}