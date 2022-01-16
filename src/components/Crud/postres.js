import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class Postres extends Component {

    state = {
        Pasteles: []
        , status: false
    }

    getProductos = () => {
        var url = Global.urljulitas;
        var request = "/productos";
        axios.get(url + request+"/?filter[where][IdCategoria]=2").then(res => {
            this.setState({
                Pasteles: res.data
                , status: true
            });
        });
    }

    componentDidMount = () => {
        this.getProductos();
    }

    render() {
        return (
            <div>
                <h1>Pasteles</h1>
                <table className="table table-info">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id Producto</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Existencia</th>
                            <th>Detalles</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status === true &&
                        (
                            this.state.Pasteles.map((pas, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{pas.IdProducto}</td>
                                        <td style={{fontWeight: "bold"}}>{pas.Nombre}</td>
                                        <td style={{fontWeight: "bold"}}>{pas.Descripcion}</td>
                                        <td>${pas.Costo}</td>
                                        <td>{pas.Existencia}</td>
                                        <td>
                                            <NavLink to={"/detalles/" + pas.IdProducto}>Detalles</NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={"/update/" + pas.IdProducto}>Modificar</NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={"/delete/" + pas.IdProducto}>Eliminar</NavLink>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}