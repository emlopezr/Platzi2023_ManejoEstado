import React, { Component } from 'react'

export class ClassState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: false,
            loading: false,
        }
    }

    componentDidUpdate() {
        // Para que no se ejecute la primera vez
        if (this.state.loading) {
            setTimeout(() => {
                // Simular llamado a una API
                this.setState({ loading: false })
            }, 2000)
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Escribe el código de seguridad</p>

                {
                    this.state.loading &&
                    <p>Cargando...</p>
                }

                <input
                    type="text"
                    placeholder='Código de seguridad'
                />
                <button
                    onClick={() => this.setState({ loading: true })}
                >
                    Comprobar
                </button>
            </div>
        )
    }
}

export default ClassState