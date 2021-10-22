import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Producto (props) {

        return (
            <div className="App-producto">
                <h4>Productos</h4>
                <Table striped bordered hover style={{verticalAlign: 'middle'}}>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th></th> 
              </tr>
            </thead>
              <tbody>
            {
              props.ProductosLista.map((x,index)=>
                <tr key={index}>
                    <td>{x.codigo}</td>
                    <td>{x.descripcion}</td>
                    <td><img src={x.url} className="App-descriptivo" alt="logo" /></td>
                    <td>${(x.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.agregar(x)}variant="success">Agregar</Button></td>
   
                </tr>
              )
            }
              </tbody>
            </Table>

              
            </div>
        )

}

