import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect, NavLink } from 'react-router-dom';

export default class UpProducto extends Component {

    producto = React.createRef();
    categoria = React.createRef();
    nombre = React.createRef();
    descripci = React.createRef();
    costo = React.createRef();
    existenci = React.createRef();
    imagen = React.createRef();

    state = { status: false }

    modificarProducto = (e) => {
        e.preventDefault();
        var idp = parseInt(this.producto.current.value);
        var cat = this.categoria.current.value;
        var nom = this.categoria.current.value;
        var des = this.descripci.current.value;
        var cos = this.costo.current.value;
        var exi = this.existenci.current.value;
        var img = this.imagen.current.value;
        var producto = {
            IdProducto: idp,
            IdCategoria: cat,
            Nombre: nom,
            Descripcion: des,
            Costo: cos,
            Existencia: exi,
            Imagen: img
        };
        var request = "/peliculas/" + idp;
        var url = Global.urlpeliculas + request;
        axios.put(url, producto).then(res => {
            this.setState({status: true});
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Modificar producto {this.props.id}</h1>
                <NavLink to={'/detalles/' + this.props.id} className="btn btn-sm  btn-dark">Detalles</NavLink>&nbsp;
                <NavLink to={'/'} className="btn btn-sm  btn-dark">Lista</NavLink>

                <form onSubmit={this.modificarProducto} style={{width: "50%", margin: "auto"}}>
                    <label>IdProducto: </label>
                    <input type="number" name="cajanum" className="form-control" ref={this.producto} value={this.props.id} readOnly />
                    <label>Categoria: </label>
                    <input type="text" name="Categoria" className="form-control" ref={this.categoria} />
                    <label>Nombre: </label>
                    <input type="text" name="Nombre" className="form-control" ref={this.nombre} />
                    <label>Descripcion: </label>
                    <input type="text" name="Descripcion" className="form-control" ref={this.descripci} />
                    <label>Costo: </label>
                    <input type="text" name="Costo" className="form-control" ref={this.costo} />
                    <label>Existencia: </label>
                    <input type="text" name="Existencia" className="form-control" ref={this.existenci} />
                    <label>Imagen: </label>
                    <input type="text" name="Imagen" className="form-control" ref={this.imagen} /><br />
                    <button className="btn btn-success">Modificar</button>
                </form>
            </div>
        )
    }
}
