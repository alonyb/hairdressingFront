import React, { Component } from 'react';

class ClientesForm extends Component {
    constructor() {
        super();
        this.state = {
            identificacion: '',
            edad: '',
            nombre: '',
            apellido: '',
            email: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddCliente(this.state)

    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form=group">
                        <input
                        type="text"
                        name="identificacion"
                        className="form-control"
                        placeholder="identificacion"
                        onChange={this.handleInput}
                        />
                        <input
                        type="text"
                        name="edad"
                        className="form-control"
                        placeholder="edad"
                        onChange={this.handleInput}
                        />
                        <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="nombre"
                        onChange={this.handleInput}
                        />
                        <input
                        type="text"
                        name="apellido"
                        className="form-control"
                        placeholder="apellido"
                        onChange={this.handleInput}
                        />
                        <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="email"
                        onChange={this.handleInput}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }
}

export default ClientesForm;