import React, { Component } from 'react';
import './App.css';
//import { ConsultClients } from './clientes.json';
import ClientesForm from './components/ClientesForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ConsultClients:[],
    };
    this.handleAddClient = this.handleAddClient.bind(this);
  }

  
  componentDidMount() {
    fetch('http://localhost:8000/get/client/v1')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({ ConsultClients: data.ConsultClients })
      })   
  }

  handleAddClient(cliente) {
    this.setState({
      clientes: [...this.state.clientes, cliente]
    })
  }

  render() {
    const clientes = this.state.ConsultClients.map((cliente) => {
      return (
        <div className="col-md-5">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ cliente.First_name }</h3>
              <span className="badge badge-pill badge-warning ml-1">
                {cliente.Id}
              </span>
            </div>
            <div className="card=body">
              <p>{cliente.Age}</p>
            </div>
          </div>
        </div>
      )
    })
  
    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <a href="http://localhost:3000" className="text-white">
              Clientes
              <span className="badge badge-pill badge-light ml-2">
                {this.state.ConsultClients.length}
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
