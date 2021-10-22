import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Listado from './Components/Listado';
import Productos from './Components/Producto';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899, url:'https://m.media-amazon.com/images/I/61zKGsIdoPL._AC_SY355_.jpg'},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999, url:'https://cdn-files.kimovil.com/phone_front/0002/92/thumb_191056_phone_front_big.jpeg'},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850, url:'https://http2.mlstatic.com/D_NQ_NP_926246-MLA44282592285_122020-O.jpg'},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949, url:'https://m.media-amazon.com/images/I/61ShPQu-u0L._AC_SX522_.jpg'},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699, url:'https://m.media-amazon.com/images/I/51wu2dpWapL._AC_SX569_.jpg'},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999, url:'https://www.primusgaming.com/media/PKS-301_620.jpg'},
      ],
    };
  }
  
  
  agregar=(producto)=>{

      let existe= this.state.carrito.find(e=>e.codigo===producto.codigo);
      let temp_lista= this.state.carrito;
      let producto_temporal;

      if(existe!==undefined){
        
        producto_temporal={
          cantidad:existe.cantidad+1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }
        
        temp_lista= this.state.carrito.filter(e=>e.codigo!==producto.codigo)
        console.log(temp_lista)
      }
      else{

        producto_temporal={
          cantidad:1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }
      }
     
      this.setState({
        carrito:[...temp_lista,producto_temporal],
        total:this.state.total+producto.precio
      })
   
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El producto se ha agregado',
        showConfirmButton: false,
        timer: 1500
      })
      
  }
 
  eliminar=(p,index)=>{
     
    let temporal;

      if(p.cantidad===1){
        temporal = this.state.carrito.filter((p,i)=>i!==index)
      }
      else{
        const producto_temporal={
          cantidad:p.cantidad-1,
          codigo:p.codigo,
          descripcion:p.descripcion,
          precio:p.precio
        }

        temporal = this.state.carrito.filter((p,i)=>i!==index)
        temporal=[...temporal,producto_temporal]

      }

     this.setState({
      carrito:temporal,
      total:this.state.total-p.precio
    })

    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'El producto se elimino',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  render() {
    var arregloSort= this.state.carrito.sort((x,y) => x.codigo-y.codigo);
    return (
      <div className="App">
        <Header/>
        <div className="App-celdas">
          
          <Productos
            ProductosLista={this.state.productosLista}
            agregar={this.agregar}

          />

          <Listado
            lista={arregloSort}
            eliminar={this.eliminar}
            total={this.state.total}
            eliminarCarrito={this.eliminarCarrito}
          />
          
        </div>
      </div>
    )
  }
}

export default App;