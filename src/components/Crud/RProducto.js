import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class ReaProducto extends Component {
    
    state = {
        producto: {}
        , status: false
    }

    detalleProducto = () => {
        var request = "/productos/"+ this.props.id;
        var url = Global.urljulitas + request;
        axios.get(url).then(res => {
            this.setState({
                producto: res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.detalleProducto();
    }

    render() {
        return (
            <div>
                <br /><br />
                <h1><u>Detalles del Producto {this.props.id}</u></h1>
                {this.state.status === true &&
                (
                    <React.Fragment>
                        <br />
                        <NavLink to="/" className="btn btn-sm btn-dark">Listado</NavLink>
                        <br /><br />
                        <h3>Categoria: <span style={{color: "green", fontWeight: "bold"}}>{this.state.producto.IdCategoria}</span></h3>
                        <h3>Nombre: <span style={{color: "green", fontWeight: "bold"}}>{this.state.producto.Nombre}</span></h3>
                        <h3>Descripcion: <span style={{color: "green", fontWeight: "bold"}}>{this.state.producto.Descripcion}</span></h3>
                        <h3>Costo:$ <span style={{color: "green", fontWeight: "bold"}}>{this.state.producto.Costo}</span></h3>
                        <h3>Existencias: <span style={{color: "green", fontWeight: "bold"}}>{this.state.producto.Existencia}</span></h3>
                        
                    </React.Fragment>
                )}
            </div>
        )
    }
}
