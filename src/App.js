import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { clientes } from './clientes.json';
import ClientesForm from './components/ClientesForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clientes,
    };
    this.handleAddClient = this.handleAddClient.bind(this);
  }

  handleAddClient(cliente) {
    this.setState({
      clientes: [...this.state.clientes, cliente]
    })
  }

  render() {
    const clientes = this.state.clientes.map((cliente, i) => {
      return (
        <div className="col-md-5">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ cliente.nombre }</h3>
              <span className="badge badge-pill badge-danger ml-1">
                {cliente.nombre}
              </span>
            </div>
            <div className="card=body">
              <p>{cliente.edad}</p>
            </div>
          </div>
        </div>
      )
    })
  
    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              Clientes
              <span className="badge badge-pill badge-light ml-2">
                {this.state.clientes.length}
              </span>
            </a>
          </nav>
          <div className="container">
            <div className="row mt-4">
              <ClientesForm onAddCliente={this.handleAddClient} />
            </div>
            <div className="cold-md-9">
              <div className="row">
                { clientes }
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
